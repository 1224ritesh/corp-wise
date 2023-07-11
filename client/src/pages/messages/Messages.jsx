import "./Messages.scss";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import moment from "moment";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));


  // use query client to invalidate the query when the mutation is successful
  // this will cause the useQuery hook to refetch the data from the database and update the state
  const queryClient = useQueryClient();

  // use query hook to fetch all conversations from the database
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data; // this is the data that will be returned to the component
      }),
  });

  // use mutation hook to mark a conversation as read
  //  the mutation hook takes an object as an argument that has a mutationFn property that takes a function as a value
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tbody>
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {data.map((convo) => (
              <tr
                className={
                  ((currentUser.isSeller && !convo.readBySeller) ||
                    (!currentUser.isSeller && !convo.readByBuyer)) ?
                  "active" : ""
                }
                key={convo.id}
              >
                <td>{currentUser.isSeller ? convo.buyerId : convo.sellerId}</td>
                <td>
                  <Link to={`/message/${convo.id}`} className="link">
                    {convo?.lastMessage?.substring(0, 100)}.....
                  </Link>
                </td>
                <td>{moment(convo.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isSeller && !convo.readBySeller) ||
                    (!currentUser.isSeller && !convo.readByBuyer)) && (
                    <button onClick={() => handleRead(convo.id)}>
                      Mark As Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;

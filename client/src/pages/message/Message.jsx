import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "./Message.scss";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
const Message = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { id } = useParams();

  // here queryClient is used to add a new message to the messages array
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data; // this is the data that will be returned to the component
      }),
  });

  // using mutation hook to add a new message to the messages array in the database and update the state of the component with the new message added to the array of messages in the database and the state of the component will be updated with the new message added to the array of messages in the database
  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      // this conversationId is the id of the conversation that the message belongs to
      // desc is the message that is being added
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> &gt; riteshhhhh &gt;
        </span>
        {isLoading ? (
          "loading.."
        ) : error ? (
          "error"
        ) : (
          <div className="messages">
            {data.map((msg) => (
              <div
                className={msg.userId === currentUser?._id ? "owner item" : "item"}
                key={msg._id}
              >
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{msg.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;

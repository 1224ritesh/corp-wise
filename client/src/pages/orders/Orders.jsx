import { useQuery } from "@tanstack/react-query";
import "./Orders.scss";
import newRequest from "../../utils/newRequest";

const Orders = () => {
  // currentUser is the user that is logged in and is stored in the local storage of the browser as a string.
  // We need to parse it to convert it to an object so that we can access the properties of the object.
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data; // this is the data that will be returned to the component
      }),
  });

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>My Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img className="img" src={order.img} alt="" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <img className="delete" src="/img/message.png" alt="" />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;

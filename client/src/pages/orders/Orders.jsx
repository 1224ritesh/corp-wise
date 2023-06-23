import "./Orders.scss";

const Orders = () => {

  const currentUser ={
    id:1,
    name:"ritesh",
    isMember:true,
  }


  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>My Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isMember ? "service buyer" : "service provider"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://picsum.photos/200" alt="" />
            </td>
            <td>Service 1</td>
            <td>599</td>
            <td>10</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className="img" src="https://picsum.photos/200" alt="" />
            </td>
            <td>Service 1</td>
            <td>599</td>
            <td>10</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className="img" src="https://picsum.photos/200" alt="" />
            </td>
            <td>Service 1</td>
            <td>599</td>
            <td>10</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img className="img" src="https://picsum.photos/200" alt="" />
            </td>
            <td>Service 1</td>
            <td>599</td>
            <td>10</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;

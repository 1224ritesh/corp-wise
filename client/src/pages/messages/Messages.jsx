import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const message = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Service Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Sharma</td>
            <td>
              <Link to = "/message/123" className = "link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>10hrs ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr className="active">
            <td>sharma</td>
            <td>
              <Link to = "/message/123" className = "link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>10hrs ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>

          <tr>
            <td>sharma</td>
            <td>
              <Link to = "/message/123" className = "link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>10hrs ago</td>
          </tr>

          <tr>
            <td>sharma</td>
            <td>
              <Link to = "/message/123" className = "link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>10hrs ago</td>
          </tr>

          <tr>
            <td>sharma</td>
            <td>
              <Link to = "/message/123" className = "link">{message.substring(0, 100)}.....</Link>
            </td>
            <td>10hrs ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;

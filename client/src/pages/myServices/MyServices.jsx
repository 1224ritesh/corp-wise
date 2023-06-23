import "./MyServices.scss";
import { Link } from "react-router-dom";
const MyServices = () => {
  return (
    <div className="myServices">
      <div className="container">
        <div className="title">
          <h1>My Services</h1>
          <Link to="/addservices">
            <button>Add New Service</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://picsum.photos/200" alt="" />
            </td>
            <td>Service 1</td>
            <td>599</td>
            <td>10</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
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
              <img className="delete" src="/img/delete.png" alt="" />
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
              <img className="delete" src="/img/delete.png" alt="" />
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
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
 
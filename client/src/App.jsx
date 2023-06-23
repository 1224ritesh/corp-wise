import NavBar from "./components/navBar/NavBar.jsx"
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx"
import Services from "./pages/services/Services.jsx";
import Service from "./pages/service/Service.jsx";
import Orders from "./pages/orders/Orders.jsx";
import MyServices from "./pages/myServices/MyServices.jsx";
import AddServices from "./pages/addServices/AddServices.jsx";
import Messages from "./pages/messages/Messages.jsx";
import Message from "./pages/message/Message.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./app.scss"



function App() {

  const Layout = () => {
   return (
      <>
        <div className="app">
          <NavBar></NavBar> 
          <Outlet></Outlet>
          <Footer></Footer> 
        </div>
      </>
   )
  }


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      // multiple services
      {
        path: "/services",
        element: <Services></Services> 
      },

      // single service
      {
        path: "/service/:id",
        element: <Service></Service>
      }, 
      {
        path: "/orders",
        element: <Orders></Orders>
      },
      {
        path: "/myservices",
        element: <MyServices></MyServices>
      },
      {
        path: "/addservices",
        element: <AddServices></AddServices>
      },
      {
        path: "/messages",
        element: <Messages></Messages>
      },
      {
        path: "/message/:id",
        element: <Message></Message>
      },
      
    ]
  },
]);
  
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
        
      </div>
    </>
  )
}

export default App

import NavBar from "./components/navBar/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Services from "./pages/services/Services.jsx";
import Service from "./pages/service/Service.jsx";
import Orders from "./pages/orders/Orders.jsx";
import MyServices from "./pages/myServices/MyServices.jsx";
import AddServices from "./pages/addServices/AddServices.jsx";
import Messages from "./pages/messages/Messages.jsx";
import Message from "./pages/message/Message.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.scss";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <>
        <div className="app">

          {/* // reason for this is that we want to use the same query client for all the components in the app so that we can share the same cache and data between them and we can also use the same query client to make mutations and other things like that. //so we will create a query client provider and pass it the query client as a prop to the query client provider component and then we will use the query client provider component to wrap all the components in the app 
           */}
          <QueryClientProvider client={queryClient}>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
          </QueryClientProvider>
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
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
          element: <Services></Services>,
        },

        // single service
        {
          path: "/service/:id",
          element: <Service></Service>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/myservices",
          element: <MyServices></MyServices>,
        },
        {
          path: "/addservices",
          element: <AddServices></AddServices>,
        },
        {
          path: "/messages",
          element: <Messages></Messages>,
        },
        {
          path: "/message/:id",
          element: <Message></Message>,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;

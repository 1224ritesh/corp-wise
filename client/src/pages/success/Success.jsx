import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Success = () => {
  // for the query using useLocation hook
  const { search } = useLocation();

  // now update the orders page using useNavigate hook
  const navigate = useNavigate();

  // now we will use the search query to get the orderId from the url
  // we will use the URLSearchParams to get the orderId from the url
  const params = new URLSearchParams(search);

  // this will get the payment_intent from the url
  const payment_intent = params.get("payment_intent");

  // this
  useEffect(() => {
    // now will make a request to the server to update the order
    // we will use the put method to update the order
    // we will pass the payment_intent to the put method
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        // now we will redirect to the order page
        // we will use the navigate method
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
          console.log(err);
      }
    };
    makeRequest();
  }, []);

  return (
    <div>
      Payment Successful. Your are being redirected to order page. Please do not
      close the page
    </div>
  );
};

export default Success;

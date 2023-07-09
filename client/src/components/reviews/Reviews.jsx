
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Review from "../review/Review";
import "./Reviews.scss";
import newRequest from "../../utils/newRequest";
const Reviews = ({ serviceId }) => {

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest
        .get(
          `/reviews/${serviceId}` // this is the url that we want to hit to get the data from the database and return it to the component that is using this hook (useQuery)
        )
        .then((res) => {
          return res.data; // this is the data that will be returned to the component
        }),
  });

  // this mutation hook is used to add a new review to the database and then update the reviews state in the parent component (ServiceDetails)
  // the mutation hook takes an object as an argument that has a mutationFn property that takes a function as a value
  // the function takes a review as an argument and returns a promise
  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },

    onSuccess: () =>{
      queryClient.invalidateQueries(["reviews"]);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // directly from the form we can get the values of the input and select fields by using e.target[0].value and e.target[1].value respectively without the need to use state
    const desc = e.target[0].value;
    const star = e.target[1].value;

    mutation.mutate({ serviceId, desc, star }); // this is the data that will be sent to the mutationFn
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading"
        : error
        ? "something went wrong"
        : data.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}

      <div className="addReview">
        <h3>Add a Review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="wirte your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Add Review</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;

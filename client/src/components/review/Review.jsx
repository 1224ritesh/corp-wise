import { useQuery } from "@tanstack/react-query";
import "./Review.scss";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  if (!review || !review.star || !review.userId) {
    // this is the condition that will be checked if the review object is not defined or if the star or the userId is not defined
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest
        .get(
          `/users/${review.userId}` // this is the url that we want to hit to get the data from the database and return it to the component that is using this hook (useQuery)
        )
        .then((res) => {
          return res.data; // this is the data that will be returned to the component
        }),
  });

  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "/img/user.png"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="states">
              <span>{data.states}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}

        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;

// single service page where if the user clicks on the LLP then user enter to that only LLP service page.

import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./Service.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";

const Service = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["service"],
    queryFn: () =>
      newRequest
        .get(
          `/services/single/${id}` // this is the url that we want to hit to get the data from the database and return it to the component that is using this hook (useQuery)
        )
        .then((res) => {
          return res.data; // this is the data that will be returned to the component
        }),
  });

  const userId = data?.userId;  // this is the userId that we are getting from the data that we are getting from the database.
  const {
    isLoading: isloadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest
        .get(
          `/users/${userId}` // this is the url that we want to hit to get the data from the database and return it to the component that is using this hook (useQuery)
        )
        .then((res) => {
          return res.data; // this is the data that will be returned to the component
        }),

        // this is the condition that if the userId is present then only the query will run otherwise not.
        enabled: !!userId, 
  });

  return (
    <div className="service">
      {isLoading ? (
        "loading"
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadCrumbs">
              Corp-Wise {">"} Tax {">"}{" "}
            </span>
            <h1>{data.title}</h1>
            {isloadingUser ? (
              "loading"
            ) : errorUser ? (
              "something went worng!"
            ) : (
              // if the user is not logged in then the user will not be able to rate the service.
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "/img/user.png"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(Math.round(data.totalStars / data.starNumber)) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}

            <Slider slidesToShow={1} arrowScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>

            <h2>About Tax</h2>
            <p>{data.desc}</p>

            {isloadingUser ? (
              "loading"
            ) : errorUser ? (
              "something went wrong!"
            ) : (
              <div className="seller">
                <h2>About the Firm</h2>
                <div className="user">
                  <img src={dataUser.img || "/img/user.png"} alt="" />

                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(Math.round(data.totalStars / data.starNumber)) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Us</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.states}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member</span>
                      <span className="desc">June 2023</span>
                    </div>
                    {/* <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">2 hrs</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div> */}
                    {/* <div className="item">
                      <span className="title">Language</span>
                      <span className="desc">English</span>
                    </div> */}
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            
            <Reviews serviceId={id}></Reviews>

          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>₹ {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryDate} days</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber}Revisision</span>
              </div>
            </div>
            <div className="feature">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;

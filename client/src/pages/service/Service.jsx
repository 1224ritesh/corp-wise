// single service page where if the user clicks on the LLP then user enter to that only LLP service page.

import "./Service.scss";
import { Slider } from "infinite-react-carousel/lib";

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Corp-Wise &gt; Tax &gt; </span>
          <h1>Solve any TAX related issues</h1>
          <div className="user">
            <img
              className="pp"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <span>Ritesh Sharma</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowScroll={1} className="slider">
            <img
              src="https://desk.zoho.com/DocsDisplay?zgId=675425301&mode=inline&blockId=6axszf3edb0915afa458d970b1d60ef80224f"
              alt=""
            />
            <img
              src="https://i0.wp.com/certicom.in/wp-content/uploads/2018/09/Income-Tax-Audit.jpg?w=700&ssl=1"
              alt=""
            />

            <img
              src="https://www.slideteam.net/media/catalog/product/cache/1280x720/s/e/service_tax_audit_procedure_ppt_powerpoint_presentation_summary_smartart_cpb_slide01.jpg"
              alt=""
            />
          </Slider>

          <h2>About Tax</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            rerum nobis minima eum beatae nostrum blanditiis praesentium maxime,
            voluptates facilis amet nihil consequuntur officiis, dolores, ipsum
            architecto expedita eaque quod quaerat illo! Sunt eligendi
            aspernatur id tempore? Laboriosam beatae sequi nemo debitis odio
            consectetur, adipisci animi, obcaecati expedita eaque alias dolores
            aspernatur asperiores molestias ipsam repellendus, placeat
            praesentium quod incidunt voluptatem facere natus officiis ut.
            Iusto, dolor! Facere cupiditate expedita eveniet reprehenderit! Eos
            minima hic consequatur corrupti iure rem aliquid tempora enim vel
            quam beatae labore provident repellendus, eaque nemo! At beatae
            deleniti tenetur numquam qui voluptatem earum assumenda recusandae.
          </p>

          <div className="firm">
            <h2>About the Firm</h2>
            <div className="user">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
              />

              <div className="info">
                <span>Ritesh sharma</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Us</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India, Bihar</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India, Bihar</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India, Bihar</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India, Bihar</span>
                </div>
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India, Bihar</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                quasi dicta nulla quibusdam quos vitae!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>

            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
                <div className="info">
                  <span>Ritesh Sharma</span>
                  <div className="country">
                    <img src="/img/flag.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />

            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
                <div className="info">
                  <span>Ritesh Sharma</span>
                  <div className="country">
                    <img src="/img/flag.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />

            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
                <div className="info">
                  <span>Ritesh Sharma</span>
                  <div className="country">
                    <img src="/img/flag.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Audit Tax</h3>
            <h2>₹ 500</h2>
          </div>
          <p>auditing the tax of your business is a must for any business </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>3 days</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisision</span>
            </div>
          </div>
          <div className="feature">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Statutory audit</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>internal audit</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Income Tax audit</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Service Tax audit</span>
            </div>

            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Stock audit</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>due diligence</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Service;

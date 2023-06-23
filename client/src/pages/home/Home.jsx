import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data.js";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured></Featured>
      <TrustedBy></TrustedBy>
      <Slide slidesToShow={5} arrowScroll={5}>
        {cards.map((card) => (
          <CategoryCard key={card.id} item={card}></CategoryCard>
        ))}
      </Slide>
      <div className="feature">
        <div className="container">
          <div className="item">
            <h1>
              Consult your business with the best experts in the industry at
              your fingertips.
            </h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget.
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              expedita!
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Verified CA & CS firms.
            </div>
            <p>
              All the CA & CS are verified and certified by the goverment
              organisation body.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected and Secured payments.
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="feature light" >
        <div className="container">
          <div className="item">
            <h1>Find the best CA & CS individuals for your business here.</h1>
            <p>
              Individuals practicing CA & CS is now just a click away from you.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget.
            </div>
            
            <div className="title">
              <img src="./img/check.png" alt="" />
              Verified CA & CS Individuals.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Practicing CA & CS Individuals.
            </div>
          
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected and Secured payments.
            </div>

            <button>Consult</button>
           
          </div>
          <div className="item">
            <img src="./img/20611.svg" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card}></ProjectCard>
        ))}
      </Slide>

    </div>
  );
};

export default Home;

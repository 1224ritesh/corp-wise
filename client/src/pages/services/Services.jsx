import { useState } from "react";
import "./Services.scss";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import {services} from "../../data.js"

const Services = () => {
  const [sort, setSort] = useState("Sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="services">
      <div className="container">
        <span className="breadcrumbs">Corp-Wise &gt; Auditing & Tax &gt;</span>
        <h1>Auditing & Tax</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
          ducimus.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>

            {/* look here when doing backend */}
            <span className="sortType">
              {sort === "sales" ? "Best" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
        {services.map((service) => (
            <ServiceCard key={service.id} item={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

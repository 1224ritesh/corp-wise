import { useState, useRef, useEffect } from "react";
import "./Services.scss";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Services = () => {
  const [sort, setSort] = useState("Sales");
  const [open, setOpen] = useState(false);

  const minRef = useRef();
  const maxRef = useRef();

  //what is useLoaction hook? it is a hook that returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.
  // useLocation() is used to get the search query from the url and then pass it to the backend
  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      newRequest
        .get(
          `/services?${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data; // this is the data that will be returned to the component
        }),
  });
  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  },[sort]);

  const apply = () => {
    refetch();
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
            <input type="text" placeholder="min" ref={minRef} />
            <input type="text" placeholder="max" ref={maxRef} />
            <button onClick={apply}>Apply</button>
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
          {isLoading
            ? "loading"
            : error
            ? "something went worng"
            : data.map((service) => (
                <ServiceCard key={service._id} item={service}></ServiceCard>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import "./NavBar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  // this hook will give us the current path name of the page that we are in it right now and we will use it to check if we are in the home page or not to change the navbar style.
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    // this is the cleanup function that will be called when the component will unmount and it will remove the event listener that added above
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Corp-Wise</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>Law & Regulations</span>
          {}
          {!currentUser?.isSeller && <span>Become a Service provider</span>}

          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/user.png"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/myservices">
                        My Service
                      </Link>
                      <Link className="link" to="/addservices">
                        Add New Service
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign in
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink " to="/">
              Company and LLP Formation
            </Link>
            <Link className="link" to="/">
              FEMA and RBI Matters
            </Link>
            <Link className="link" to="/">
              Agreements & Petitions
            </Link>
            <Link className="link" to="/">
              Corporate Governance
            </Link>
            <Link className="link" to="/">
              Industrial Licensing
            </Link>
            <Link className="link" to="/">
              SEBI Matters and IPO
            </Link>
            <Link className="link" to="/">
              CSR Consultancy
            </Link>
            <Link className="link" to="/">
              Management Consultancy
            </Link>
            <Link className="link" to="/">
              ESOP and SAR
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [list] = useState(["javascript", "java", "react", "angular", "mongoDB", "mySQL", "nodejs", "springboot"]);
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid mb-1">
          <button className="navbar-toggler" type="button">
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link " style={{ fontSize: "30px" }} href="/dashboard">
                  Home
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            {localStorage.getItem("USER_KEY") && (
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/user">
                    <Button style={{ height: 40, borderBottom: "0px", marginRight: "5px" }}>User Info</Button>
                  </Link>
                  <Button style={{ height: 40, borderBottom: "0px", marginLeft: "5px" }} onClick={() => logOut()}>
                    Logout
                  </Button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div className="row " style={{ width: "80em", height: "13px" }}>
        <div className=" col-sm-2 px-sm-1 bg-dark " style={{ height: "890px" }}>
          <div className="px-4 pt-5 text-white" style={{ fontSize: "20px" }}>
            <ul className="nav flex-column">
              {list.map((e, i) => (
                <li key={i} className="">
                  <a href={"/article/" + e} className="nav-link ">
                    <span className="d-none d-sm-inline">{e}</span>{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

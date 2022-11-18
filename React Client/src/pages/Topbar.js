import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchUserData, createNewUser } from "../api/authenticationService";
import { TopUser } from "../api/authenticationService";

export const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [u, setU] = useState("");
  const [list] = useState(["javascript", "java", "react", "angular", "mongoDB", "mySQL", "nodejs", "springboot"]);
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid mb-4">
          <button className="navbar-toggler" type="button">
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Home
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            {localStorage.getItem("USER_KEY") && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/user">
                    <Button style={{ marginRight: "5px" }}>User Info</Button>
                  </Link>
                  <Button style={{ marginLeft: "5px" }} onClick={() => logOut()}>
                    Logout
                  </Button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div className="row " style={{ width: 1000, height: 30 }}>
        <div className=" col-sm-2 px-sm-2 px-0 bg-dark ">
          <div className="align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
            <ul className="collapse show nav flex-column ms-1">
              {list.map((e, i) => (
                <li key={i} className="w-25">
                  <a href={"/article/" + e} className="nav-link px-0">
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

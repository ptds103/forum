import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../api/authenticationService";
import { useNavigate, Link } from "react-router-dom";

import "./dashboard.css";

export const Dashboard = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [lists] = useState(["javascript", "java", "react", "angular", "mongoDB", "mySQL", "node.js", "springboot"]);
  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
        localStorage.setItem("USER", response.data.userName);
      })
      .catch((e) => {
        localStorage.clear();
        navigate("/");
      });
  }, []);

  return (
    <div className="cont">
      <div className="container mt-2">
        <h1 className=" paul">
          PAUL'S BLOG
        </h1>
      </div>
      {lists.map((list, i) => (
        <Link to={"/article/" + list}>
          <button type="button" className="button-64" key={i}>
            {list}
          </button>
        </Link>
      ))}
    </div>
  );
};

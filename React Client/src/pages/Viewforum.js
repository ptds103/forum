import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArticleDatum, ArticleDelete } from "../api/authenticationService";

const MainWrapper = styled.div`
  margin-left: 100px;
  .border {
    width: 90%;
    height: 500px;
    color: black;
    font-size: 20px;
  }
  .body {
    border-top: 20px;
    font-size: 20px;
    color: lightblue;
    border: 1px solid grey;
    width: 90%;
  }
`;
export const Viewforum = () => {
  const [data, setData] = useState([]);
  const { id, para } = useParams();
  const navigate = useNavigate();
  const user = localStorage.getItem("USER").toLowerCase();
  React.useEffect(() => {
    ArticleDatum(id - 1)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <MainWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-7 offset-md-2 border rounded p-3 ">
            <h2 className="text-center m-4"> {data.title}</h2>

            <div className="body"></div>
            <h2 className="text-center font-weight-light m-4"> {data.body}</h2>
            {user === data.username && (
              <Link to={"/article/" + para + "/" + Number(id) + "/edit"}>
                <button className="btn btn-outline-primary m-0">Edit</button>
              </Link>
            )}

            <button className="btn btn-outline-info float-right m-0" onClick={() => navigate(-1)}>
              Back
            </button>
            {user === data.username && (
              <button
                className="btn btn-outline-danger  m-0"
                onClick={() => {
                  ArticleDelete(Number(id));
                  navigate("/article/" + para);
                  window.location.reload();
                }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

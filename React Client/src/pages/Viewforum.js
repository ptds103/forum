import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArticleDatum, ArticleDelete } from "../api/authenticationService";

const MainWrapper = styled.div`
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
  .buttonHeight {
    margin-top:1rem;
    
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
      <div className="card" style={{ width: "60rem", height:"40rem", paddingLeft: "11em", paddingRight: "11em", marginLeft: "28em", marginTop: "5em", background:"#F8F9D9"}}>
        <div className="card-body">
          <div className="card-title font-weight-bold" style ={{fontSize:"23px"}}>{data.title}</div>
          <h6 class="card-subtitle m-2 text-muted">{data.username}</h6>
          <div className="card-text text-center font-weight-light" style={{border:"1px solid black", height:"70%", background:"white", opacity:"1"}}> {data.body}</div>
          <div className="buttonHeight">
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
              className="btn btn-outline-danger "
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

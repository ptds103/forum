import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserData } from "../../api/authenticationService";
import { useNavigate, Link } from "react-router-dom";
import { Forumpage } from "../Forumpage";
const MainWrapper = styled.div`
  margin-left: 7rem;
  .boton {
    margin: 1rem;
    width: 15rem !important;
    max-width: 100% !important;
    max-height: 100% !important;
    height: 15rem !important;
    text-align: center;
    padding: 0px;
    font-size: 22px;
  }
`;

export const Dashboard = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [article, setArticle] = useState({});
  const [lists] = useState(["javascript", "java", "react", "angular", "mongoDB", "mySQL", "node.js", "springboot"]);
  const [color] = useState(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]);
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
    <Container>
      <MainWrapper>
        <div className="cont">
          <div className="container mt-2">
            <h1 className="text-primary mb-5">Paul' Blog</h1>
          </div>
          {lists.map((list, i) => (
            <Link to={"/article/" + list}>
              <button type="button" className="boton" key={i}>
                {list}
              </button>
            </Link>
          ))}
        </div>
      </MainWrapper>
    </Container>
  );
};

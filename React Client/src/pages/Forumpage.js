import React, { useState, useEffect, useFocusEffect } from "react";
import { Pagination } from "./Pagination";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArticleData } from "../api/authenticationService";

const MainWrapper = styled.div`
  margin-left: 14rem;
  .main {
    margin-left: 4rem;
    font-size: 5rem;
    color: lightblue;
    font-weight: bold;
  }
  .cont2 {
    width: 90%;
    border: 1px solid black;
    height: 40rem;
    border-radius: 30px;
    margin: 1rem, 3rem, 1rem, 1rem;
  }
  .list {
    list-style: none;
    border: 1px solid grey;
    margin-top: 0.4rem;
    padding-left: 20px;
  }
  .title {
    margin: auto;
    text-align: justify;
  }
  .author {
    margin: auto;
    text-align: end;
  }
  .pagin {
    display: block;
  }
`;

export const Forumpage = () => {
  const [newData, setFilteredData] = useState([]);
  const [datum, setData] = useState([]);
  const navigate = useNavigate();
  const { para } = useParams();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const emptylist = ["no articles yet..", "", "", "", "", "", "", "", "", "", "", "", ""];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = datum.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    ArticleData()
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <MainWrapper>
      <div className="main">Welcome to {para}</div>
      <div className="cont2">
        <ul className="list-group mb-4">
          {datum.map((e, i) => (
            <Link to={"/article/" + para + "/" + e.id} key={i}>
              {e.section === para && (
                <li className="list-group-item">
                  <div className="title">{e.title} </div>
                  <div className="author">{e.username}</div>
                </li>
              )}
            </Link>
          ))}
        </ul>
      </div>
      <div className="pagin"></div>
      <Link to="/article/write">new article</Link>
    </MainWrapper>
  );
};

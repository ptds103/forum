import React, { useState } from "react";
import {Pagination} from './Pagination';
import { TopUser } from "../api/authenticationService";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
const MainWrapper = styled.div`
  margin-left: 100px;
  .styles {
    margin-left: 3rem;
}
`;
export const Mypost = () => {
  const user = localStorage.getItem("USER").toLowerCase();
  const [datum, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

   
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    TopUser(user).then((res) => {
      setData(res.data);

    });
    console.log(datum);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = datum.slice(indexOfFirstPost, indexOfLastPost);
 

  return (
    <MainWrapper>
    <div className="container">
      <div className="">
        <div className="col">
          <h2 className="text-center m-3">&#128512; {user} &#128512;</h2>
          <h5 className="text-center m-3">WELCOME</h5>
        </div>
      </div>
      <div className="">
        <ul>
          {currentPosts.map((e, i) => (
            <li className="list-group-item ">
              <h4>
                Title: <spam>{e.title}</spam>{" "}
              </h4>
              <Link to={"/article/" +e.section + '/' + e.id} >
              <button type="submit" className="btn btn-outline-primary float-right">
                continue on...
              </button>
              </Link>
              <h4 className="list float right">Wrote by: {e.username}</h4>
            </li>
          ))}
        </ul>
      </div>
      <div className="styles">
      <Pagination postsPerPage={postsPerPage} totalPosts={datum.length} paginate={paginate} />
      </div>

    </div>
    </MainWrapper>
  );
};

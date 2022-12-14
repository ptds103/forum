import React, { useState } from "react";
import { Pagination } from "../Pagination";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArticleData } from "../../api/authenticationService";
import "./Forumpage.css";
import YouTube from "react-youtube"

export const Forumpage = () => {
  const navigate = useNavigate();
  const { para } = useParams();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [newData, setNewData] = useState([]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    ArticleData()
      .then((response) => {
        filter(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const filter = (d) => {
    const a = d.filter((e) => {
      return e.section == para;
    });
    setNewData(a);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newData.slice(indexOfFirstPost, indexOfLastPost);
  const opts = {
    height: "600",
    width: "340",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
    },
  };

  return (
    <div className="forumBody">
      <div className="main">
       <span className="mainText"> Welcome to {para} </span>
        <button className="button-65">
          <Link to="/article/write">new article</Link>
        </button>
      </div>

      <div className="tabl">
        <table className="table table-dark">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>field</th>
          </tr>

          {currentPosts.map((e, i) => (
            <tr>
              <td className="tree">
                <Link to={"/article/" + para + "/" + e.id} key={i}>
                  {e.title}
                </Link>{" "}
              </td>
              <td>{e.username}</td>
              <td>{e.section}</td>
            </tr>
          ))}
        </table>
        <YouTube 
        className="video"
        videoId="6p4SeR3pliM" 
        opts={opts} />
      </div>
      <div className="pagin"></div>

      <Pagination className="pagination" postsPerPage={postsPerPage} totalPosts={newData.length} paginate={paginate} />
    </div>
  );
};

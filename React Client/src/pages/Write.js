import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ArticleCreate } from "../api/authenticationService";

export const Write = () => {
  const [lists] = useState(["javascript", "java", "react", "angular", "mongoDB", "mySQL", "node.js", "springboot"]);
  const userIDName = localStorage.getItem("USER").toLowerCase();
  const [article, setArticle] = useState({
    title: "",
    body: "",
    section: "",
    username: userIDName,
  });
  const { id, title, body, section } = article;
  let navigate = useNavigate();
  const onInputChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
    console.log(article);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    ArticleCreate(article).then((res) => {
      console.log(res);
    });
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2" style={{background:"white"}}>
          <h2 className="text-center m-4"> Write your article</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                title
              </label>
              <input type={"text"} className="form-control" name="title" value={title} onChange={(e) => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                body
              </label>
              <textarea type={"text"} className="form-control input-lg" style={{ height: 200 }} name="body" value={body} onChange={(e) => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label className="form-label">
                section
                <br />
                <select name="section" value={section} onChange={(e) => onInputChange(e)}>
                  {lists.map((e, i) => (
                    <option key={i}>{e}</option>
                  ))}
                </select>
              </label>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button className="btn btn-outline-danger mx-2" onClick={() => navigate(-1)}>
              cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

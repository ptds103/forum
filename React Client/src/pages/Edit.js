import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleDatum, ArticleUpdate } from "../api/authenticationService";

export const Edit = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [article, setArticle] = useState({
    id: data.id,
    title: data.title,
    body: data.body,
    section: data.section,
  });

  React.useEffect(() => {
    ArticleDatum(id - 1)
      .then((response) => {
        setArticle({
          id: Number(id),
          title: response.data.title,
          body: response.data.body,
          section: response.data.section,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [rerender]);

  const { title, body, section } = article;

  const onInputChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    ArticleUpdate(id, article);
    navigate("/article/" + article.section);
  };
  return (
    <div
      className="card"
      style={{ width: "60rem", height: "40rem", paddingLeft: "11em", paddingRight: "11em", marginLeft: "28em", marginTop: "5em", opacity: "0.9" }}
    >
      <h2 className="text-center m-4"> Edit Article</h2>

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
          <textarea
            type={"text"}
            className="form-control input-lg"
            style={{ height: 200 }}
            placeholder="Enter Body"
            name="body"
            value={body}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            section
          </label>
          <input type={"text"} className="form-control" placeholder="Enter the Subject" name="section" value={section} onChange={(e) => onInputChange(e)} />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
        <button className="btn btn-outline-danger mx-2" onClick={() => navigate(-1)}>
          cancel
        </button>
      </form>
    </div>
  );
};

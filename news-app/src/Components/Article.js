import React from "react";
//displaying article content
const Article = (props) => {
  const { article } = props;
  return (
    <div className="content">
      <div className="description">
        <h4>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <h5 className="card-title">{article.title}</h5>
          </a>
        </h4>
        <p>{article.description}</p>
        <p>
          <small>
            By:&nbsp;
            {article.author ? article.author : "No Author Specified"}
          </small>
        </p>
      </div>

      <img
        className="loading"
        src={article.urlToImage}
        alt="No Image Found Please try again"
      />
    </div>
  );
};

export default Article;

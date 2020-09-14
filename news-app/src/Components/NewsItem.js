import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import Article from "./Article";

const NewsItem = (props) => {
  const [articles, setArticles] = useState([]);
  //Retrieve Articles based on selected news source. 
  const api = `https://newsapi.org/v2/top-headlines?sources=${props.selectedSource}&apiKey=`;

  useEffect(() => {
    axios.get(api + process.env.REACT_APP_API_KEY).then((response) => {
      const data = response.data;
      setArticles(data.articles);
    });
  }, [api]);
  return (
    <div>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </div>
  );
};
//To avoid unnecessary rendering
export default memo(NewsItem);

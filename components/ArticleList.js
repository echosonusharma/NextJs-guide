import React from "react";
import ArticleStyles from "../styles/articles.module.css";
import ArticleItem from "./ArticleItem";


const ArticleList = ({ articles }) => {

  return (
    <>
      <div className={ArticleStyles.grid} key={articles.id}>
        {articles.map((article) => {
          return (
            <ArticleItem article={article} />
          );
        })}

      </div>
    </>
  )
};

export default ArticleList;
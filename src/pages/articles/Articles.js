import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Body from "../../components/Body";

import { PageContext } from "../../PageContextProvider";

function Articles() {
  const { articles } = useContext(PageContext);
  console.log("POL", articles);
  return (
    <Body pageName="Articles">
      <ul className="articles-card">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/article/${article.article_id}`}>
                <h1>Topic: {article.title}</h1>
                <h2>{article.topic}</h2>
                <p>
                  {article.body.substring(0, 90)}
                  {article.body.length > 90 && "..."}
                </p>
                <h2>Author: {article.author}</h2>
                <section>
                  <p>
                    Created at: {new Date(article.created_at).toLocaleString()}
                  </p>
                  <p>Votes: {article.votes}</p>
                </section>
              </Link>
            </li>
          );
        })}
      </ul>
    </Body>
  );
}

export default Articles;

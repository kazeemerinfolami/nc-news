import React, { useContext } from "react";
import Body from "../../components/Body";

import { PageContext } from "../../PageContextProvider";

function Articles() {
  const { articles } = useContext(PageContext);
  console.log("POL", articles);
  return (
    <Body pageName="Articles">
      <ul className="articles-card">
        {articles.map((article, i) => {
          return (
            <li key={i}>
              <h1>{article.title}</h1>
              <h2>{article.topic}</h2>
              <p>
                {article.body.substring(0, 90)}
                {article.body.length > 90 && "..."}
              </p>
              <h2>Author: {article.author}</h2>
              <section>
                <p>{article.created_at}</p>
                <p>Votes: {article.votes}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </Body>
  );
}

export default Articles;

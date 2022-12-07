import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../API/api";
import Body from "../../components/Body";
import Loading from "../../components/Loading";

function Article() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <Body pageName="Article">
      <ul className="articles-card">
        {!Object.keys(article).length ? (
          <li>
            <Loading />
          </li>
        ) : (
          <li>
            <h1>{article.title}</h1>
            <h2>{article.topic}</h2>
            <p>{article.body}</p>
            <h2>Author: {article.author}</h2>
            <section>
              <p>{article.created_at}</p>
              <p>Votes: {article.votes}</p>
            </section>
          </li>
        )}
      </ul>
    </Body>
  );
}

export default Article;

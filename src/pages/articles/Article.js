import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, getComments } from "../../API/api";
import Body from "../../components/Body";
import Loading from "../../components/Loading";
import Comments from "./comments/Comments";

function Article() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [openComments, setOpenComments] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then(({ article }) => {
      setArticle(article);
    });
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
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
            <h2>Topic: {article.topic}</h2>
            <p className="article-body">{article.body}</p>
            <h2>Author: {article.author}</h2>
            <section>
              <p>
                Created at:{" "}
                <span>{new Date(article.created_at).toLocaleString()}</span>
              </p>
              <p>
                Votes: <span>{article.votes}</span>
              </p>
            </section>
            <div className="comments-container">
              <div className="comments-dropdown-con">
                <h2>Comments</h2>
                {openComments ? (
                  <div
                    onClick={() => {
                      setOpenComments(!openComments);
                    }}
                  >
                    ⬆
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setOpenComments(!openComments);
                    }}
                  >
                    ⬇
                  </div>
                )}
              </div>
              {openComments ? <Comments comments={comments} /> : null}
            </div>
          </li>
        )}
      </ul>
    </Body>
  );
}

export default Article;

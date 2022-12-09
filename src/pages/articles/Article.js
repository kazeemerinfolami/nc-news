import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getArticle, getComments } from "../../API/api";
import Body from "../../components/Body";
import Loading from "../../components/Loading";
import { PageContext } from "../../PageContextProvider";
import Comments from "./comments/Comments";
import VoteInc from "./votes/VoteInc";

function Article() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [openComments, setOpenComments] = useState(false);
  const { article_id } = useParams();

  const { ifLoggedin } = useContext(PageContext);

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
        {!ifLoggedin ? (
          <div>
            <h4 className="vote-login-note">
              <span>Note: </span> You have to be logged in as a user to vote and
              comment on this article <NavLink to="/users"> login </NavLink>
            </h4>
          </div>
        ) : null}

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
                <VoteInc articleCount={article.votes} />
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

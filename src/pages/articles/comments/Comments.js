import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postArticleComment } from "../../../API/api";
import { PageContext } from "../../../PageContextProvider";

function Comments({ comments }) {
  const [commentValue, setCommentValue] = useState({ author: "", body: "" });
  const [formErr, setFormErr] = useState("");
  const [btnMessage, setbtnMessage] = useState("send comment");

  const { ifLoggedin } = useContext(PageContext);

  const { article_id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentValue({ ...commentValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setbtnMessage("sending....");
    postArticleComment(article_id, commentValue)
      .then((res) => {
        console.log("IM CALLING YOU", res);
        setbtnMessage("sent");
      })
      .catch((err) => {
        setFormErr(err.response.data.msg);
        console.log("my error", err.response.data.msg);
        setbtnMessage("Resend comment");
      });
  };

  return (
    <>
      {ifLoggedin ? (
        <form onSubmit={handleSubmit} className="form-body">
          {formErr ? <span className="err-msg">Err: {formErr}</span> : null}
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              id="author"
              className="comment-text-area"
              value={commentValue.author}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              required
              type="text"
              name="body"
              id="comment"
              className="comment-text-area"
              value={commentValue.body}
              onChange={handleChange}
            />
          </div>
          <div className="post-comment-btn">
            <button
              type="submit"
              className={btnMessage === "Resend comment" ? "failed" : "send"}
            >
              {btnMessage}
            </button>
          </div>
        </form>
      ) : null}
      <ul>
        {!comments ? (
          <li className="no-comment">
            <h2>No Comment</h2>
          </li>
        ) : (
          comments.map((comment) => (
            <li key={comment.comment_id}>
              <h2>{comment.author}</h2>
              <p className="article-body">{comment.body}</p>
              <section>
                <p>
                  Created at:{" "}
                  <span>{new Date(comment.created_at).toLocaleString()}</span>
                </p>
                <p>
                  Votes: <span>{comment.votes}</span>
                </p>
              </section>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default Comments;

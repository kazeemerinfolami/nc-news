import React from "react";

function Comments({ comments }) {
  return (
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
  );
}

export default Comments;

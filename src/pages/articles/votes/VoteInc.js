import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { patchArticleVote } from "../../../API/api";
import { PageContext } from "../../../PageContextProvider";

function VoteInc({ articleCount }) {
  const [count, setCount] = useState(1);
  const [voteCount, setvoteCount] = useState(articleCount);
  const [hasVoted, sethasVoted] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const { ifLoggedin } = useContext(PageContext);

  const { article_id } = useParams();

  function increment() {
    setCount(function (prevCount) {
      return (prevCount = -1);
    });
    sethasVoted(true);
    patchVote(article_id, count);
  }

  function decrement() {
    sethasVoted(false);
    setCount(function (prevCount) {
      return (prevCount = 1);
    });

    patchVote(article_id, count);
  }

  function patchVote(article_id) {
    if (article_id)
      patchArticleVote(article_id, { inc_votes: count })
        .then(({ data }) => {
          setvoteCount(data.article.votes);
          setErrMessage("");
        })
        .catch((err) => {
          setErrMessage(err.message);
        });
  }
  return (
    <>
      Votes: <span>{voteCount}</span>
      {ifLoggedin ? (
        <div className="vote-container">
          {errMessage ? <h4>{errMessage}</h4> : null}
          {hasVoted ? (
            <span className="decVote" onClick={decrement}>
              reverse
            </span>
          ) : (
            <span className=" incVote" onClick={increment}>
              vote
            </span>
          )}
        </div>
      ) : null}
    </>
  );
}

export default VoteInc;

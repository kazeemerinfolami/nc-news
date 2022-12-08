import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patchArticleVote } from "../../../API/api";
// import { PageContext } from "../../../PageContextProvider";

function VoteInc({ articleCount }) {
  const [count, setCount] = useState(0);
  const [voteCount, setvoteCount] = useState(articleCount);
  const [hasVoted, sethasVoted] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  // const { ifLoggedin } = useContext(PageContext);

  const { article_id } = useParams();
  useEffect(() => {
    if (article_id)
      patchArticleVote(article_id, { inc_votes: count })
        .then(({ data }) => {
          sethasVoted(true);
          setvoteCount(data.article.votes);
          setErrMessage("");
        })
        .catch((err) => {
          sethasVoted(false);
          setErrMessage(err.message);
        });
  }, [count, article_id]);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount = 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      return (prevCount = -1);
    });
  }
  return (
    <>
      Votes: <span>{voteCount}</span>
      <div className="vote-container">
        {errMessage ? <h4>{errMessage}</h4> : null}
        <span className="incVote" onClick={increment}>
          {count === 1 && hasVoted === true ? "✓" : "+"}
        </span>
        <span className="decVote" onClick={decrement}>
          -
        </span>
      </div>
    </>
  );
}

export default VoteInc;

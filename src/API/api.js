import axios from "axios";

const API = axios.create({
  baseURL: "https://clean-gray-lizard.cyclic.app/api/",
});
export const getArticles = () => {
  return API.get("/articles").then((articles) => {
    return articles.data.articles;
  });
};
export const getUsers = () => {
  return API.get("/users").then((users) => {
    return users.data.users;
  });
};

export const getTitles = () => {
  return API.get("/topics").then(({ data }) => {
    return data;
  });
};

export const getArticle = (article_id) => {
  return API.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getComments = (article_id) => {
  return API.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchArticleVote = (article_id, voteData) => {
  return API.patch(`/articles/${article_id}`, voteData).then((res) => {
    return res;
  });
};

export const postArticleComment = (article_id, comment) => {
  return API.post(`/articles/${article_id}/comments`, comment).then((res) => {
    return res;
  });
};

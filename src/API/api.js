import axios from "axios";

const API = axios.create({
  baseURL: "https://clean-gray-lizard.cyclic.app/api/",
});
export const getArticles = () => {
  return API.get("/articles").then((articles) => {
    return articles.data.articles;
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

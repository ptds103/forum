import axios from "axios";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const userLogin = (authRequest) => {
  return axios({
    method: "POST",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/auth/login`,
    data: authRequest,
  });
};

export const fetchUserData = (authRequest) => {
  return axios({
    method: "GET",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/auth/userinfo`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const createNewUser = (data) => {
  return axios({
    method: "POST",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/auth/register`,
    data: {
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    },
    headers: {},
  });
};
export const ArticleCreate = (data) => {
  return axios({
    method: "POST",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/article`,
    data: {
      // id: data.id,
      title: data.title,
      body: data.body,
      section: data.section,
      username: data.username,
    },
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const ArticleData = () => {
  return axios({
    method: "GET",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/article`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const ArticleDatum = (id) => {
  return axios({
    method: "GET",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/article/${id}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};
export const ArticleDelete = (id) => {
  return axios({
    method: "DELETE",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/article/${id}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const ArticleUpdate = (id, data) => {
  return axios({
    method: "PATCH",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/article/${Number(id)}`,
    data: {
      id: data.id,
      title: data.title,
      body: data.body,
      section: data.section,
    },
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const TopUser = (user) => {
  return axios({
    method: "GET",
    url: `${process.env.hostUrl || "http://localhost:8080"}/api/v1/article/user/${user}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

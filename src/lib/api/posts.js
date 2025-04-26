import client from "./client";


export const writePost = ({ title, body, user_id, subject }) =>
  client.post(`/api/posts`, { title, body, user_id, subject });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, subject }) => {
  return client.get(`/api/posts?page=${page}&subject=${subject}`, {
    params: { username },
  });
};

export const updatePost = ({ id, title, body }) => {
  const { token } = JSON.parse(localStorage.getItem("user")).user; // localStorage에서 토큰 가져오기
  // console.log(token);
  return client.patch(
    `/api/posts/${id}`,
    { title, body },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const removePost = ({ id, navigate }) => {
  const { token } = JSON.parse(localStorage.getItem("user")).user; // localStorage에서 토큰 가져오기
  // console.log('remove post');
  // console.log(id);
  return client.delete(`/api/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

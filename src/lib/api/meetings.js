import client from "./client";

export const initMeetings = (user_id) => {
  console.log(user_id);
  return client.get(`/api/meeting`, {
    params: {
      user_id,
    },
  });
};

export const listGroupTimeTable = ({ group_id, user_id }) => {
  console.log(group_id);
  console.log(user_id);
  return client.get(`/api/meeting/listGroupTimeTable`, {
    params: {
      group_id,
      user_id,
    },
  });
};

export const searchUsername = (keyword) => {
  console.log(keyword);
  return client.get(`/api/meeting/searchUsername`, {
    params: {
      keyword,
    },
  });
};

export const uploadMeetingGroup = (data) => {
  console.log(data);
  return client.post(`/api/meeting/addMeetingGroup`, data);
};

export const deleteMeetingGroup = (group_id) => {
  console.log(group_id);
  return client.delete(`/api/meeting/deleteMeetingGroup`, {
    params: { group_id },
  });
};

export const updateMeetingGroup = (data) => {
  console.log(data);
  return client.put(
    `/api/meeting/updateMeetingGroup`,
    data, // 전체 데이터를 포함해야 함
  );
};

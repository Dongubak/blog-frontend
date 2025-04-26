import client from "./client";

export const getMeal = async () => {
  const response = await client.get(`/today`);

  return response;
};

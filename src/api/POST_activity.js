import axios from "./axiosInstance";

export const postActivity = async (email) => {
  return axios
    .post(`/activity-groups`, {
      title: "testing",
      email: "rofisudyono@gmail.com",
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

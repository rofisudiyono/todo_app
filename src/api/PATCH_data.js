import axios from "./axiosInstance";

export const updateReports = async (id, title) => {
  return axios
    .patch(`/activity-groups/${id}`, {
      title,
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.log(e.response.data));
};

import axios from "./axiosInstance";

export const deleteReports = async (id) => {
  return axios
    .delete(`/activity-groups/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.log(e.response.data));
};

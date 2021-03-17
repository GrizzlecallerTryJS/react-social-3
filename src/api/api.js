import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c3ab2b38-91ca-4335-a97b-5c1d92e21288",
  },
});

const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  setFollowStatus(id, status) {
    if (!status) {
      return instance.delete(`follow/${id}`).then((response) => response.data);
    } else {
      return instance.post(`follow/${id}`).then((response) => response.data);
    }
  },

  getUserProfile(userID) {
    return instance.get(`profile/${userID}`).then((response) => response.data);
  },

  authMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export default userAPI;

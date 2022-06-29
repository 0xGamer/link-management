const URL = "https://node-api-xyz.herokuapp.com/users";
import axios from "axios";

const Service = {
  getAllUsers: async function () {
    return await axios.get(URL);
  },

  addUser: async function (data) {
    return axios.post(URL, data);
  },
  
  updateUser: async function (id, data) {
    return axios.patch(`${URL}/${id}`, data);
  },

  deleteUser: async function (id) {
    return axios.delete(`${URL}/${id}`);
  },
};

export default Service;

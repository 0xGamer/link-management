const URL = "https://lilac-snail-hem.cyclic.app/links";
import axios from "axios";

const Service = {
  getAllLinks: async function () {
    return await axios.get(URL);
  },

  addLink: async function (data) {
    return axios.post(URL, data);
  },

  updateLink: async function (id, data) {
    return axios.patch(`${URL}/${id}`, data);
  },

  deleteLink: async function (id) {
    return axios.delete(`${URL}/${id}`);
  },
};

export default Service;

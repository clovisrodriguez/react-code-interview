import axios from "axios";

export const getListData = (pageId) => {
  return axios.get(`http://swapi.dev/api/people/?page=${pageId}`);
};

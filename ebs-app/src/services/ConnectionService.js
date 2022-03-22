import http from "../http-common";
const getAll = () => {
  return http.get("/connections");
};
const get = id => {
  return http.get(`/connections/${id}`);
};
const create = data => {
  return http.post("/connections", data);
};
const update = (id, data) => {
  return http.put(`/connections/${id}`, data);
};
const remove = id => {
  return http.delete(`/connections/${id}`);
};
const removeAll = () => {
  return http.delete(`/connections`);
};
const findByTitle = title => {
  return http.get(`/connections?title=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
//   removeAll,
//   findByTitle
};
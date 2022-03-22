import http from "../http-common";
const getAll = () => {
  return http.get("/billings");
};
const get = id => {
  return http.get(`/billings/${id}`);
};

const getbyConnectionId= id => {
  return http.get(`/billings/FindBillByConncetionId/${id}`);
};

const getAllbyConnectionId= id => {
  return http.get(`/billings/FindAllBills/${id}`);
};
const create = data => {
  return http.post("/billings", data);
};
const update = (id, data) => {
  return http.put(`/billings/${id}`, data);
};

const StatusChange = (id) => {
  return http.put(`/billings/StatusChange/${id}`);
};
const remove = id => {
  return http.delete(`/billings/${id}`);
};
const removeAll = () => {
  return http.delete(`/billings`);
};
const findByTitle = title => {
  return http.get(`/billings?title=${title}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  getbyConnectionId,
  getAllbyConnectionId,
  StatusChange
//   removeAll,
//   findByTitle
};
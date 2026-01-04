import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getLeads = () => api.get("/agent/leads");
export const getLeadById = (id) => api.get(`/agent/leads/${id}`);
export const sendEmail = (payload) => api.post("/agent/email", payload);
export const getActivity = () => api.get("/agent/activity");
export const updateSettings = (payload) => api.put("/agent/settings", payload);
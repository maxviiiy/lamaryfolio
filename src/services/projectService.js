import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export default {
  getProjects,
};

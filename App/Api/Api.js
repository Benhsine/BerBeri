// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getBarbershops = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${API_URL}/barbershops`, {
      params: { latitude, longitude },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching barbershops:', error);
    throw error;
  }
};

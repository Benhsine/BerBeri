// api.js
import axios from 'axios';

const API_URL = 'http://192.168.137.232:8080/api/v1/service-provider/profile';

export const getBarbershops = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${API_URL}/all`, {
      params: { latitude, longitude },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching barbershops:', error);
    throw error;
  }
};

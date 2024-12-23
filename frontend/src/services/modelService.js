import axios from 'axios';

const BACKEND_URL = 'http://127.0.0.1:3001';

export const getPrediction = async (file) => {
  console.log("Sending file to backend for prediction:", file);

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(`${BACKEND_URL}/predict`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("Backend response:", response.data);
    return response.data; // Assuming the backend sends predictions as JSON
  } 
  catch (error) {
    console.error("Error while making API request:", error);
    throw error;
  }
};

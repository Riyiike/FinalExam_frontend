// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://finalexam-backend.onrender.com/api'; // Adjust to your backend server URL

export const addItem = async (item) => {
  return await axios.post(`${API_BASE_URL}/additem`, item);
};

export const getItems = async () => {
  return await axios.get(`${API_BASE_URL}/getitems`);
};

export const getItemById = async (id) => {
  return await axios.get(`${API_BASE_URL}/getitem/${id}`);
};

export const updateItem = async (id, updatedItem) => {
  return await axios.put(`${API_BASE_URL}/item/${id}`, updatedItem);
};

export const deleteItem = async (id) => {
  return await axios.delete(`${API_BASE_URL}/item/${id}`);
};

export const getRandomItem = async () => {
  return await axios.get(`${API_BASE_URL}/getrandomitem`);
};
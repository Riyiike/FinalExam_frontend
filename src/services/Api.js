// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://finalexam-backend.onrender.com/api/v1/book'; 

export const addBook = async (book) => {
  return await axios.post(`${API_BASE_URL}/`, book);
};

export const getBook = async () => {
  return await axios.get(`${API_BASE_URL}/`);
};

export const getBookbyID = async (id) => {
  return await axios.get(`${API_BASE_URL}/${id}`);
};

export const updateBook = async (id, updatedbook) => {
  return await axios.put(`${API_BASE_URL}/${id}`, updatedbook);
};

export const deleteBook = async (id) => {
  return await axios.delete(`${API_BASE_URL}/${id}`);
};

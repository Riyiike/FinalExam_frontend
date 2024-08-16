// src/components/ItemForm.js
import React, { useState, useEffect } from 'react';
import { addItem, updateItem, getItemById } from '../services/Api';
import { useParams, useNavigate } from 'react-router-dom';

const ItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(''); // Keep this as a string for input value
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      loadItem();
    }
  }, [id]);

  const loadItem = async () => {
    const response = await getItemById(id);
    const item = response.data;
    setName(item.name);
    setPrice(item.price); // This will be a number, not a string
    setDescription(item.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = {
      name,
      price: parseFloat(price), // Convert price to a number
      description,
    };

    if (id) {
      await updateItem(id, itemData);
    } else {
      await addItem(itemData);
    }

    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Item' : 'Add Item'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {id ? 'Update' : 'Add'} Item
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
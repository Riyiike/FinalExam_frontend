// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../services/Api';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadItems();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Item List</h2>
      <Link
        to="/add"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New Item
      </Link>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item._id} className="border p-4 rounded shadow">
            <strong className="text-xl">{item.name}</strong>
            <p className="text-gray-700">${item.price}</p>
            <p className="text-gray-600">{item.description}</p>
            <div className="flex space-x-2 mt-2">
              <Link
                to={`/edit/${item._id}`}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
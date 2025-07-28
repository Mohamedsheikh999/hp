import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchCategories = async () => {
    const res = await axios.get('http://localhost:5000/api/categories');
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/categories', {
      name,
      image_url: imageUrl,
    });
    setName('');
    setImageUrl('');
    fetchCategories();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Manage Categories</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border p-2 w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Category</button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="shadow p-2 rounded border text-center">
            <img src={cat.image_url} alt={cat.name} className="w-full h-32 object-cover rounded" />
            <p className="mt-2 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
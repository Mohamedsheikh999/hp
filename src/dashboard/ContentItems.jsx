import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContentItems = () => {
  const [subjects, setSubjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [contentItems, setContentItems] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    file_url: '',
    subject_id: '',
    category_id: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/subjects').then((res) => setSubjects(res.data));
    axios.get('http://localhost:5000/api/categories').then((res) => setCategories(res.data));
    axios.get('http://localhost:5000/api/contents').then((res) => setContentItems(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/contents', form);
    setForm({ title: '', description: '', file_url: '', subject_id: '', category_id: '' });
    const res = await axios.get('http://localhost:5000/api/contents');
    setContentItems(res.data);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Manage Content Items</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" />
        <input name="file_url" value={form.file_url} onChange={handleChange} placeholder="File URL" className="border p-2 w-full" />
        <select name="subject_id" value={form.subject_id} onChange={handleChange} className="border p-2 w-full">
          <option value="">Select Subject</option>
          {subjects.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <select name="category_id" value={form.category_id} onChange={handleChange} className="border p-2 w-full">
          <option value="">Select Category</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add Content</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contentItems.map((item) => (
          <div key={item.id} className="p-4 border shadow rounded">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-700">{item.description}</p>
            <p className="text-xs text-blue-600 break-words">{item.file_url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentItems;

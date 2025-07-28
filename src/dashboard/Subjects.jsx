import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [classLevels, setClassLevels] = useState([]);
  const [newSubject, setNewSubject] = useState({ name: '', class_level_id: '', image_url: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    const [subjectRes, levelRes] = await Promise.all([
      axios.get('/api/subjects/'),
      axios.get('/api/class-levels/')
    ]);
    setSubjects(subjectRes.data);
    setClassLevels(levelRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createSubject = async () => {
    if (editingId) {
      await axios.put(`/api/subjects/${editingId}`, newSubject);
      setEditingId(null);
    } else {
      await axios.post('/api/subjects/', newSubject);
    }
    setNewSubject({ name: '', class_level_id: '', image_url: '' });
    fetchData();
  };

  const handleEdit = (subject) => {
    setEditingId(subject.id);
    setNewSubject({
      name: subject.name,
      image_url: subject.image_url,
      class_level_id: subject.class_level_id
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/subjects/${id}`);
    fetchData();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Subjects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {subjects.map(sub => (
          <div key={sub.id} className="border p-4 rounded shadow relative">
            <img src={sub.image_url} alt="" className="w-full h-32 object-cover rounded mb-2" />
            <h2 className="text-lg font-semibold">{sub.name}</h2>
            <p className="text-sm text-gray-600">Class Level: {sub.class_level.name}</p>
            <div className="absolute top-2 right-2 space-x-2">
              <button onClick={() => handleEdit(sub)} className="text-blue-600 hover:underline">Edit</button>
              <button onClick={() => handleDelete(sub.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <input className="border p-2 w-full" placeholder="Name" value={newSubject.name} onChange={e => setNewSubject({ ...newSubject, name: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Image URL" value={newSubject.image_url} onChange={e => setNewSubject({ ...newSubject, image_url: e.target.value })} />
        <select className="border p-2 w-full" value={newSubject.class_level_id} onChange={e => setNewSubject({ ...newSubject, class_level_id: e.target.value })}>
          <option value="">Select Class Level</option>
          {classLevels.map(level => <option key={level.id} value={level.id}>{level.name}</option>)}
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={createSubject}>
          {editingId ? 'Update Subject' : 'Add Subject'}
        </button>
      </div>
    </div>
  );
};

export default Subjects;

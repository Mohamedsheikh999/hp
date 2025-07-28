import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassLevels = () => {
  const [classLevels, setClassLevels] = useState([]);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create an axios instance with base configuration
  const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false,
    timeout: 5000
  });
  
  // Add request interceptor
  api.interceptors.request.use(config => {
    console.log('Request:', config.method, config.url);
    return config;
  }, error => {
    return Promise.reject(error);
  });
  
  // Add response interceptor
  api.interceptors.response.use(response => {
    console.log('Response:', response.status, response.data);
    return response;
  }, error => {
    if (error.response) {
      console.error('Error response:', error.response.status, error.response.data);
    } else {
      console.error('Network error:', error.message);
    }
    return Promise.reject(error);
  });

  const fetchLevels = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/class-levels/');
      setClassLevels(res.data);
    } catch (err) {
      setError('Failed to fetch class levels. Please try again later.');
      console.error('Fetch error:', err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  const createLevel = async () => {
    if (!newName.trim()) {
      setError('Class level name cannot be empty');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      const response = await api.post('/class-levels/', { 
        name: newName 
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      setNewName('');
      await fetchLevels();
    } catch (err) {
      const errorMessage = err.response?.data?.error || 
                         err.response?.data?.message || 
                         'Failed to create class level';
      setError(errorMessage);
      console.error('Create error:', err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteLevel = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await api.delete(`/class-levels/${id}`);
      await fetchLevels();
    } catch (err) {
      setError('Failed to delete class level. Please try again.');
      console.error('Delete error:', err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLevels();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Class Levels</h1>
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
          <div className="flex justify-between items-center">
            <p>{error}</p>
            <button 
              onClick={() => setError(null)}
              className="text-red-700 hover:text-red-900 font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      <div className="mb-6 flex gap-3">
        <input
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder="Enter new class level"
          className="border border-gray-300 p-2 rounded flex-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
          onKeyPress={(e) => e.key === 'Enter' && createLevel()}
        />
        <button
          onClick={createLevel}
          disabled={loading || !newName.trim()}
          className={`px-4 py-2 rounded font-medium ${
            loading || !newName.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Adding...
            </span>
          ) : 'Add Level'}
        </button>
      </div>
      
      {loading && !classLevels.length ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {classLevels.map(level => (
            <li key={level.id} className="py-3 flex justify-between items-center hover:bg-gray-50 px-2 rounded">
              <span className="text-gray-800">{level.name}</span>
              <button
                onClick={() => deleteLevel(level.id)}
                disabled={loading}
                className={`text-sm px-3 py-1 rounded ${
                  loading
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-red-600 hover:text-white hover:bg-red-600 border border-red-600 hover:border-red-700'
                }`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {!loading && classLevels.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No class levels found. Add one to get started!
        </div>
      )}
    </div>
  );
};

export default ClassLevels;
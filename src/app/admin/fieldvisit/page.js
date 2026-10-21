'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, ArrowUp, ArrowDown } from 'lucide-react';

export default function AdminFieldVisitPage() {
  const [configs, setConfigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingConfig, setEditingConfig] = useState(null);
  const [formData, setFormData] = useState({
    heading: '',
    buttonText: '',
    buttonUrl: '',
  });
  const router = useRouter();

  useEffect(() => {
    fetchConfigs();
  }, []);

  const fetchConfigs = async () => {
    try {
      const response = await fetch('/api/meenestham/fieldvisit');
      if (!response.ok) throw new Error('Failed to fetch configurations');
      const data = await response.json();
      setConfigs(data);
    } catch (error) {
      console.error('Error fetching configurations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingConfig 
        ? '/api/meenestham/fieldvisit'
        : '/api/meenestham/fieldvisit';
      
      const method = editingConfig ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingConfig ? { ...formData, id: editingConfig.id } : formData),
      });

      if (!response.ok) throw new Error('Failed to save configuration');
      
      await fetchConfigs();
      setShowModal(false);
      setFormData({
        heading: '',
        buttonText: '',
        buttonUrl: '',
      });
      setEditingConfig(null);
    } catch (error) {
      console.error('Error saving configuration:', error);
    }
  };

  const handleEdit = (config) => {
    setEditingConfig(config);
    setFormData({
      heading: config.heading,
      buttonText: config.buttonText,
      buttonUrl: config.buttonUrl,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this configuration?')) return;
    
    try {
      const response = await fetch(`/api/meenestham/fieldvisit?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete configuration');
      
      await fetchConfigs();
    } catch (error) {
      console.error('Error deleting configuration:', error);
    }
  };

  const handleToggleActive = async (id, currentStatus) => {
    try {
      const response = await fetch('/api/meenestham/fieldvisit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          isActive: !currentStatus,
        }),
      });

      if (!response.ok) throw new Error('Failed to update configuration status');
      
      await fetchConfigs();
    } catch (error) {
      console.error('Error updating configuration status:', error);
    }
  };

  const handleReorder = async (id, direction) => {
    const currentIndex = configs.findIndex(config => config.id === id);
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === configs.length - 1)
    ) {
      return;
    }

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    const newConfigs = [...configs];
    const temp = newConfigs[currentIndex];
    newConfigs[currentIndex] = newConfigs[newIndex];
    newConfigs[newIndex] = temp;

    // Update orders in the database
    try {
      await Promise.all(
        newConfigs.map((config, index) =>
          fetch('/api/meenestham/fieldvisit', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: config.id,
              order: index + 1,
            }),
          })
        )
      );

      await fetchConfigs();
    } catch (error) {
      console.error('Error reordering configurations:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="text-black">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Field Visit Management</h1>
          <button
            onClick={() => {
              setEditingConfig(null);
              setFormData({
                heading: '',
                buttonText: '',
                buttonUrl: '',
              });
              setShowModal(true);
            }}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add Configuration
          </button>
        </div>

        <div className="space-y-6">
          {configs.map((config) => (
            <div key={config.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{config.heading}</h3>
                  <p className="text-gray-600 mb-2">Button Text: {config.buttonText}</p>
                  <p className="text-gray-600">URL: {config.buttonUrl}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleReorder(config.id, 'up')}
                    className="text-gray-600 hover:text-gray-800"
                    disabled={configs.indexOf(config) === 0}
                  >
                    <ArrowUp className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleReorder(config.id, 'down')}
                    className="text-gray-600 hover:text-gray-800"
                    disabled={configs.indexOf(config) === configs.length - 1}
                  >
                    <ArrowDown className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleEdit(config)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(config.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleToggleActive(config.id, config.isActive)}
                    className={`${
                      config.isActive ? 'text-green-600 hover:text-green-800' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {config.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-black">
                {editingConfig ? 'Edit Configuration' : 'Add Configuration'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black mb-2">Heading</label>
                <input
                  type="text"
                  value={formData.heading}
                  onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-black mb-2">Button Text</label>
                <input
                  type="text"
                  value={formData.buttonText}
                  onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-black mb-2">Button URL</label>
                <input
                  type="url"
                  value={formData.buttonUrl}
                  onChange={(e) => setFormData({ ...formData, buttonUrl: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  {editingConfig ? 'Update' : 'Add'} Configuration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 
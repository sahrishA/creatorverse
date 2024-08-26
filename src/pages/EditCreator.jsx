import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setName(data.name);
      setUrl(data.url);
      setDescription(data.description);
      setImageURL(data.imageURL);
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('creators')
      .update({ name, url, description, imageURL })
      .eq('id', id);

    if (error) console.error(error);
    else {
      alert('Creator updated!');
      navigate('/creators'); // Replace history.push with navigate
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this creator?');
    if (confirmDelete) {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);
  
      if (error) {
        console.error(error);
      } else {
        alert('Creator deleted!');
        navigate('/creators'); // Replace history.push with navigate
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Image URL</label>
        <input
          type="url"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />

        <button type="submit">Update Creator</button>
        <button onClick={handleDelete} style={{ color: 'red' }}>
          Delete Creator
        </button>
      </form>
    </div>
  );
};

export default EditCreator;

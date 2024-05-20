import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function PutCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setFormData] = useState({
    username: '',
    start_date: '',
    email: '',
    password: '',
    active: '',
    img_id: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users data:', error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...data,
      [e.target.id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        id: data.id,
        title: data.username,
        levelId: data.start_date,
        categoryId: data.email,
        startDate: data.password,
        endDate: data.active,
        credit: data.img_id,
      };
      await axios.put(`http://localhost:8080/users/${id}`, userData);
      navigate('/admin/user');
      alert('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <Link to={"/admin/user"}>
          <button className='button'>Go back →</button>
        </Link>   
      </div>
      <h1>Update Course "{data.username}"</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Username
          <input id='username' value={data.username} onChange={handleChange} />
        </label>
        <label htmlFor='start date'>
          Start date
          <input id='start_date' type='date' value={data.start_date} onChange={handleChange} />
        </label>
        <label htmlFor='email'>
          Email
          <input id='email' value={data.email} onChange={handleChange} />
        </label>
        <label htmlFor='password'>
            Password
          <input id='password' value={data.password} onChange={handleChange} />
        </label>
        <label htmlFor='active'>
          Active
          <input id='active' type='boolean' value={data.active} onChange={handleChange} />
        </label>
        <label htmlFor='Img id'>
          Img id
          <input id='img_id' type='number' value={data.img_id} onChange={handleChange} />
        </label>
        <button type='submit'>Update</button>
      </form>
    </>
  );
}
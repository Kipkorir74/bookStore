import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/Backbutton';

const deleteFile = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true)

    axios
      .delete(`http://localhost:4000/api/bookstore/${id}`)
      .then(() => {
        setLoading(true);
        alert('Book deleted Succefully')
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occured while deleting the book');
        console.log(error)
      })
  }

  return (
    <div class="p-4">
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {
        loading ? <Spinner /> : ''

      }
      <div className='flex flex-col border-2 border-sky-700 rounded-xl w-[600px] p-8 mx-auto'>

        <h3 className='text-2xl'>Confirm if you want to delete the Book</h3>
        <button className='p-4 bg-red-700 text-white m-8 w-full' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default deleteFile

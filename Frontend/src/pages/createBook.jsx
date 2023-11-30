import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/Backbutton';


const createBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.post('http://localhost:4000/api/bookstore/', data)
      .then((res) => {
        console.log(res)
        setLoading(false);
        alert('Book record created Successfully');
        navigate('/')

      })
      .catch((error) => {
        setLoading(false);
        alert('Error creating book records')
        console.log(error)
      })
  }
  return (
    <div class='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'> Create Book</h1>
      {
        loading ? (
          <Spinner />
        ) : ''
      }
      <div className='flex flex-col border-2 border-sky-700 rounded-xl w-[600px] p-4 mx-auto'>
        <div classname='my-4'>
          <div className='text-xl mr-4 text-gray-600'>Title</div>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full'
          />
        </div>

        <div classname='my-4'>
          <div className='text-xl mr-4 text-gray-600'>Author</div>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full'
          />
        </div>

        <div classname='my-4'>
          <div className='text-xl mr-4 text-gray-600'>Year Published</div>
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full'
          />
        </div>
          <button className='p-2 bg-sky-600 m-8' onClick={handleSubmit}>
              Submit
          </button>
      </div>
    </div>
  )
}

export default createBook

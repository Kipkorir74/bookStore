import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/Backbutton';

const displayBook = () => {

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:4000/api/bookstore/${id}`)
      .then((res) => {
        console.log(res)
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setLoading(false);
      })

  }, [])

  return (
    <div class="p-4">
      <BackButton />
      <h1 className='text-3xl my-4'> Show Book</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-700 rounded-xl w-fit p-4 ml-3'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>ID:</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Book Title:</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Book Author:</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Year Published:</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Latest Update Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>            
        </div>
      )}

    </div>
  )
}

export default displayBook

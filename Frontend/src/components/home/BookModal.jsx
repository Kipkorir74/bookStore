import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center'
            onClick={onClose}
        >
            <div onClick={(e) => e.stopPropagation()}
                className='w-[650px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >

                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 bg-red-400 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-600'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p2 className='mt-4'>Madocho Kudocho</p2>
                <p2 className='my-4'>Subaru ya Mambaru Imekam na Imejaa subaru ya Mambaru imekam na Imejaa.
                    Considering the Knowledge of the Lines spewed above, we can conclusively conclude without a doubt and absolute surity that
                    the autor is a stupendous imbecile /_!_\ 
                </p2>
            </div>

        </div>
    )
}

export default BookModal

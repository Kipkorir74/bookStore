import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const Backbutton = ({ destination = '/' }) => {
    return (
        <div className='flex'>
            <Link to={destination}
            className='bg-sky-700 text-white px-3 rounded-lg w-fit'>

                <BsArrowLeft className='text-2xl'/>

            </Link>
        </div>
    )
}

export default Backbutton

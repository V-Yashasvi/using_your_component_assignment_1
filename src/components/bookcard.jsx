/* eslint-disable react/prop-types */
// write the book component code here
import 'react'

const Bookcard = ({book}) => {
    return (
        <div className='flex justify-center'>
            <img src={book.image} alt={book.name} className='w-100 h-100 '/>
            <h3 className='text-3xl text-gray-900'>{book.name}</h3>
            <h3 className='text-2xl text-gray-700'>{book.genre}</h3>
            <h3 className='text-2xl text-gray-700'>{book.author}</h3>
        </div>
    )
}

export default Bookcard

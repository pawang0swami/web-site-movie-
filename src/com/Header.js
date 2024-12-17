import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='text-3xl sticky top-0 headeraa bg-black z-10 text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between items-center'>
       <Link to={"/"}><span>Fly<span className= "text-white">oont</span></span>  </Link>
       <h1 className='text-lg text-white flex items-center cursor-pointer'>
       <Link to={"/add"}  ><Button><AddIcon className='mr-1 ' /> <span className='text-white'>Add new</span>  </Button> </Link>  </h1>
    </div>
  )
}

export default Header
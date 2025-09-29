import React from 'react';
import { Link } from 'react-router-dom';


const Heroslider = ({title,subtitle,img}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center my-10 h-[60vh]'>
            <div className='w-1/2 mx-auto'>
                <p className='text-xl'>{title}</p>
                <h1 className='text-3xl'>{subtitle}</h1>
                <Link to='services'><button className='btn my-3 btn-outline'>Learn More</button></Link>
            </div>
            <div className='w-1/2 mx-auto'>
                <img src={img} alt={img.name} />
            </div>
        </div>
    );
};

export default Heroslider;
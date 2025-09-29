import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='text-center my-4'>
            <h1 className='text-4xl'>{heading}</h1>
            <p>{subheading}</p>
        </div>
    );
};

export default SectionTitle;
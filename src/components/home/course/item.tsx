import React from 'react';

import './style.css';

interface ItemProps {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
    bgColor: string;
    description?: string;
}
const Item: React.FC<ItemProps> = ({ id, title, category, year, image, bgColor, description }) => {
  return (
    <div 
    // className='opacity-container-child' 
      className={`opacity-container-child group h-fit w-full cursor-pointer ${
        id % 2 === 0 ? 'slide-from-left' : 'slide-from-right'
      }`}
      style={{
        marginTop: id % 2 === 1 ? '3.5rem' : '0'
      }}
    >
      <a className='h-fit w-full'>
        <span>
          <div className='aspect-[3/2] w-full overflow-hidden rounded-3xl relative transition-colors duration-300 group-hover:bg-opacity-80' style={{backgroundColor: bgColor}}>
            <img src={image} alt='image' className='aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-[1.015]' />
          </div>
        </span>
        <div className='mt-4 space-y-2'>
          <h3 className='text-xl font-bold text-[var(--section-title)]'>{title}</h3>
          <p className='text-[var(--section-desc)]'>{description}</p>
        </div>
        <div className='flex items-center justify-between gap-2 mt-4'>
          <p className='text-[var(--section-desc)]'>{category}</p>
          <p className='text-[var(--section-desc)]'>{year}</p>
        </div>
      </a>
    </div>
  )
};

export default Item;
import React from 'react';

import './style.css';

interface ItemProps {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
    bgColor: string;
    index: number;
}
const Item: React.FC<ItemProps> = ({ index, id, title, category, year, image, bgColor }) => {
  return (
    <div 
      key={id} 
      className={`opacity-container-child group h-fit w-full cursor-pointer ${
        index % 2 === 0 ? 'slide-from-left' : 'slide-from-right'
      }`}
      style={{
        marginTop: index % 2 === 1 ? '3.5rem' : '0'
      }}
    >
      <a className='h-fit w-full'>
        <span className='opacity-container-child__image'>
          <div className='aspect-[3/2] w-full overflow-hidden rounded-3xl relative transition-colors duration-300 group-hover:bg-opacity-80' style={{backgroundColor: bgColor}}>
            <img src={image} alt='image' className='aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-[1.015]' />
          </div>
        </span>
        <span>
          <div className='mt-4 space-y-2'>
            <h3 className='text-xl font-bold text-[var(--section-title)]'>{title}</h3>
            <p className='text-[var(--section-desc)]'>{category}</p>
            <p className='text-[var(--section-desc)]'>{year}</p>
          </div>
        </span>
      </a>
    </div>
  )
};

export default Item;
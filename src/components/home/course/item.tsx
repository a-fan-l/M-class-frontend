import React, { useState } from 'react';

import { Heart } from 'lucide-react';
import { cn } from '@utils/index';
import { FileInfo } from '@/types/course';
import { Button } from "@/components/ui/button";

import './style.css';

export interface CourseItemProps {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  bgColor: string;
  description?: string;
  imgInfo: FileInfo;
  imgUrl: string;
  price: string;
  duration: number;
}
const Item: React.FC<CourseItemProps> = ({ id, title, category, createdAt, imgInfo, bgColor, description, imgUrl, price, duration }) => {
  const [likes, setLikes] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  

  const handleLike = async () => {
    // try {
      // 模拟 API 调用
        // setLikes(isLiked => isLiked ? prev - 1 : prev + 1);
        setIsLiked(!isLiked);
  };

  return (
    <div 
      className={`opacity-container-child group h-fit w-full cursor-pointer 
        ${id % 2 === 0 ? 'slide-from-left' : 'slide-from-right'}
        ${id % 2 === 1 ? 'md:mt-15 mt-0' : 'md:mt-0 mt-0'}
      `}
    >
      <a className='h-fit w-full' href={`/course/${id}`}>
        <span>
          <div className='aspect-[3/2] w-full overflow-hidden rounded-3xl relative transition-colors duration-300 group-hover:bg-opacity-80' style={{backgroundColor: bgColor}}>
            <img src={imgUrl} alt={imgInfo.title} className='aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-[1.015]' />
          </div>
        </span>
        <div className='mt-4 space-y-2'>
          <h3 className='text-xl font-bold text-[var(--section-title)]'>{title}</h3>
          <p className='text-[var(--section-desc)]'>{description}</p>
        </div>
        <div className='flex items-center justify-between gap-2 pt-2'>
          <p className='text-[var(--section-desc)]'>{category}</p>
          <p className='text-[var(--section-desc)] text-xl font-bold'>{`${price} YD`}</p>
        </div>
      </a>
      <div className='flex items-end justify-end pt-5 flex-row gap-6'>
          <Button
            className={cn(
              "bg-[var(--button-primary)] hover:[var(--button-primary/60)] flex items-center text-[var(--foreground)] transition-all duration-100",
              isLiked && "text-red-500"
            )}
            onClick={handleLike}
          >
            <Heart className={cn(isLiked ? "fill-red-500 transform scale-140" : "", "transition-all duration-100")}/>
            <span>like it</span>
          </Button>
          <Button className='text-[var(--section-desc)]' variant='outline'>Buy now</Button>          
        </div>
    </div>
  )
};

export default Item;
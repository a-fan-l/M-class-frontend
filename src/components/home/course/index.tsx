'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { CourseListResponse, Course } from '@/types/course';
import useHome from '@/hooks/useHome';

import './style.css';
import Item, { CourseItemProps } from './item';

// const courseList = [
//   {
//     id: 1,
//     title: 'Aora',
//     category: 'Development',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
//     year: '2024',
//     image: '/static/home/course.png',
//     bgColor: '#8c8472',
//   },
//   {
//     id: 2,
//     title: 'Code Screenshot',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
//     category: 'Development & Design',
//     year: '2024',
//     image: '/static/home/course.png',
//     bgColor: '#f8d7ea',
//   },
//   {
//     id: 3,
//     title: 'Code Screenshot',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
//     category: 'Development & Design',
//     year: '2024',
//     image: '/static/home/course.png',
//     bgColor: '#fff',
//   },
//   {
//     id: 4,
//     title: 'Code Screenshot',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
//     category: 'Development & Design',
//     year: '2024',
//     image: '/static/home/course.png',
//     bgColor: 'rgba(187 247 208)',
//   }
// ];

export interface CourseListProps {
  data: Course[]
}
const colorList = ['#8c8472', '#f8d7ea', '#fff', 'rgba(187 247 208)'];
const CourseSection = ({ data }: CourseListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('home');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { state: { courseList }, actions: { setCourseList } } = useHome({});

  useEffect(() => {
    if (data) {
      const _data = data.filter((_, i) => i < 4).map((item, index) => ({
        id: item.id,
        title: item.name,
        category: item.category,
        description: item.description,
        createdAt: item.createdAt,
        imgInfo: item.imgInfo,
        bgColor: colorList[index],
        imgUrl: item.imgUrl,
        price: item.price,
        duration: item.duration,
      }));
      setCourseList(_data);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              requestAnimationFrame(() => {
                const element = child as HTMLElement;
                element.classList.add('slide-from-left', 'slide-from-right');
                requestAnimationFrame(() => {
                  element.style.animationDelay = `${index * 0.1}s`;
                });
              });
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className='w-full py-6 mb-30'>
      <div className="container mx-auto px-4">
        <h1 className='mb-2 font-bold text-4xl text-[var(--section-title)]'>
          {t('course.title')}
        </h1>

        <h2 className='text-[var(--section-desc)] md:mb-10 mb-5 text-xl'>
          {t('course.description')}
        </h2>
        <div 
          ref={containerRef}
          className='pb-20 gap-10 opacity-container grid row-gap-10 md:grid-cols-2 grid-rows-[masonry] gap-y-20 py-md sm:gap-x-16 sm:gap-y-0'
        >
          {courseList.map((item) => (
            <div className='opacity-container-child' key={item.id}>
              <Item {...item} />
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <Link href="/course" className='cursor-pointer rounded-full text-secondary/80 px-5 py-3 bg-primary/10 hover:bg-primary/20 transition-colors duration-300 hover:text-secondary'>View All Course</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;

'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import './style.css';
import Item from './item';

const courseList = [
  {
    id: 1,
    title: 'Aora',
    category: 'Development',
    year: '2024',
    image: '/static/home/course.png',
    bgColor: '#8c8472',
  },
  {
    id: 2,
    title: 'Code Screenshot',
    category: 'Development & Design',
    year: '2024',
    image: '/static/home/course.png',
    bgColor: '#f8d7ea',
  },
  {
    id: 3,
    title: 'Code Screenshot',
    category: 'Development & Design',
    year: '2024',
    image: '/static/home/course.png',
    bgColor: '#fff',
  },
  {
    id: 4,
    title: 'Code Screenshot',
    category: 'Development & Design',
    year: '2024',
    image: '/static/home/course.png',
    bgColor: 'rgba(187 247 208)',
  }
];

const CourseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('home');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
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
    <div className='w-full py-6 md:mt-30 md:mb-30'>
      <div className="container mx-auto px-4">
        <h1 className='mb-2 font-bold text-4xl text-[var(--section-title)]'>
          {t('course.title')}
        </h1>

        <h2 className='text-[var(--section-desc)] mb-10 text-xl'>
          {t('course.description')}
        </h2>
        <div 
          ref={containerRef}
          className='pb-20 opacity-container grid row-gap-10 grid-cols-2 grid-rows-[masonry] gap-y-10 py-md sm:gap-x-16 sm:gap-y-0'
        >
          {courseList.map((item, index) => (
            <Item 
              {...item} 
              index={index}
              key={item.id}
            />
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

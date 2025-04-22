'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from '@utils/system/index';

import './style.css'

const courseList = [
  {
    id: 1,
    title: 'Aora',
    category: 'Development',
    year: '2024',
    image: '/static/image.png',
    bgColor: '#8c8472',
  },
  {
    id: 2,
    title: 'Code Screenshot',
    category: 'Development & Design',
    year: '2024',
    image: '/static/image.png',
    bgColor: '#f8d7ea',
  },
  {
    id: 3,
    title: 'Code Screenshot',
    category: 'Development & Design',
    year: '2024',
    image: '/static/image.png',
    bgColor: '#fff',
  },
  {
    id: 4,
    title: 'Code Screenshot',
    category: 'Development & Design',
    year: '2024',
    image: '/static/image.png',
    bgColor: 'rgba(187 247 208)',
  }
];

export interface CourseProps {}
const Course: React.FC<CourseProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('opacity-100', 'translate-y-0');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
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
    <div className="w-full py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h3 className="text-3xl font-bold text-center mb-4">
            {t('course.title')}
          </h3>
          <p className="text-center text-muted-foreground">
            {t('course.description')}
          </p>
        </div>
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseList.map((course) => (
            <Card
              key={course.id}
              className={cn(
                "opacity-0 translate-y-4 transition-all duration-500",
                "hover:shadow-lg hover:scale-105"
              )}
              style={{ backgroundColor: course.bgColor }}
            >
              <CardHeader className="p-0">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold">{course.title}</h4>
                <p className="text-sm text-muted-foreground">{course.category}</p>
                <p className="text-xs text-muted-foreground">{course.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
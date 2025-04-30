'use client';

import React, {useEffect} from 'react'

import CourseContent from '@/components/course/index'
import { courseApi } from '@/apis/course';

const Course = () => {
  useEffect(() => {
    // get course list
  }, []);
  
  return (
    <CourseContent />
  )
}

export default Course

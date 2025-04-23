
import { cn } from '@utils/index';

import { CourseList } from './list';

interface CourseContentProps {
  className?: string;
}

const CourseContent = ({ className }: CourseContentProps) => {
  return (
    <div className={cn('container mx-auto px-4 py-8', className)}>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-muted-foreground">
          Explore our wide range of courses designed to help you achieve your learning goals
        </p>
      </div>
      <CourseList />
    </div>
  );
}

export default CourseContent;
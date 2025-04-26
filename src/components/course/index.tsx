import { cn } from '@utils/index';
import { useTranslations } from 'next-intl';

import CourseList from './list';
import FilterAction from './filter';


interface CourseContentProps {
  className?: string;
}

const CourseContent = ({ className }: CourseContentProps) => {
  const t = useTranslations('course');
  return (
    <div className={cn('container mx-auto px-4 py-8', className)}>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2 text-[var(--section-title)]">
          {t('title')}
        </h1>
        <p className="text-xl text-[var(--section-desc)]">
          {t('description')}
        </p>
      </div>
      {/* <FilterAction/> */}
      <CourseList />
    </div>
  );
}

export default CourseContent;
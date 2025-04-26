import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@components/ui/button';
import { Badge } from '@components/ui/badge';

import './style.css'

export interface CourseItemProps {
  id: number;
  image: string;
  symbol: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
}

const CourseItem: React.FC<CourseItemProps> = ({
  title,
  description,
  duration,
  level,
  price,
}: CourseItemProps) =>  {
  return (
    <Card className={'course-item w-full border border-primary-foreground/10 cursor-pointer'}>
      <CardHeader>
        <CardTitle className='text-[var(--section-title)] text-2xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-48 mb-4">
          <img
            src="/static/course/image.png"
            alt="Project-Image"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <p className="text-md text-[var(--section-desc)]">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <Badge variant="secondary" className='text-sm py-1'>{duration}</Badge>
          <Badge className='text-sm bg-transparent border border-primary py-1 text-[var(--section-tag)]' variant={level === 'beginner' ? 'default' : level === 'intermediate' ? 'outline' : 'destructive'}>
            {level}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-2xl font-bold text-[var(--section-desc)]">${price}</div>
        <div className='items-end'>
          <Button className='text-[var(--third-foreground)] cursor-pointer mr-2 hover:bg-primary-foreground/30 transition-all duration-300' variant={'outline'}>Like</Button>
          <Button className='text-[var(--third-foreground)] cursor-pointer hover:bg-primary-foreground/10 transition-all duration-300' variant={'outline'}>Buy Now</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CourseItem;
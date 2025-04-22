import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@components/ui/button';
import { Badge } from '@components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { cn } from '@utils/system/index';

import './style.css'

interface CourseItemProps {
  title: string;
  description: string;
  teacher: {
    name: string;
    avatar: string;
  };
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  className?: string;
}

export function CourseItem({
  title,
  description,
  teacher,
  duration,
  level,
  price,
  className,
}: CourseItemProps) {
  return (
    <Card className={cn('w-full', className )}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={teacher.avatar} alt={teacher.name} />
            <AvatarFallback>{teacher.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{teacher.name}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-48 mb-4">
          <img
            src="/static/course/image.png"
            alt="Project-Image"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <Badge variant="secondary">{duration}</Badge>
          <Badge variant={level === 'beginner' ? 'default' : level === 'intermediate' ? 'outline' : 'destructive'}>
            {level}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-2xl font-bold">${price}</div>
        <Button>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
}
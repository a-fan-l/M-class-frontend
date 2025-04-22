import React from "react";
import { Input } from '@components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select';
import { cn } from '@utils/system/index';

import { CourseItem } from './item';

const data = [
  {
    image: "/images/cyber-city.jpg",
    title: "Cyber City Clan",
    price: "PRICE (GAC) = 0.59 BUSD",
    endTime: "2025-04-09T14:05:00", // 示例时间
    minAllocation: "TBA",
    maxAllocation: "900.00 BUSD",
    targetedRaise: "200,000 BUSD",
    accessType: "Public",
    chainIcon: "/images/chain-icon-1.png", // 示例图标
  },
  {
    image: "/images/space-xy.jpg",
    title: "The Space XY",
    price: "PRICE (XYZ) = 0.99 BUSD",
    endTime: "2025-04-09T10:15:00",
    minAllocation: "0.33 BUSD",
    maxAllocation: "580.00 BUSD",
    targetedRaise: "3,800,000 BUSD",
    accessType: "Private",
    chainIcon: "/images/chain-icon-2.png",
  },
  {
    image: "/images/kingdomx.jpg",
    title: "KingdomX",
    price: "PRICE (KTC) = 0.45 BUSD",
    endTime: "2025-04-10T22:42:00",
    minAllocation: "TBA",
    maxAllocation: "TBA",
    targetedRaise: "48,000 BUSD",
    accessType: "Community",
    chainIcon: "/images/chain-icon-3.png",
  },
];

interface CourseListProps {
  className?: string;
}

export function CourseList({ className }: CourseListProps) {
  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <Input placeholder="Search courses..." className="max-w-sm" />
        </div>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CourseItem
          title="Introduction to Web Development"
          description="Learn the basics of HTML, CSS, and JavaScript"
          teacher={{
            name: "John Doe",
            avatar: "/static/avatars/teacher-1.jpg"
          }}
          duration="8 weeks"
          level="beginner"
          price={99}
        />
        <CourseItem
          title="Advanced React Patterns"
          description="Master advanced React concepts and patterns"
          teacher={{
            name: "Jane Smith",
            avatar: "/static/avatars/teacher-2.jpg"
          }}
          duration="12 weeks"
          level="advanced"
          price={199}
        />
        <CourseItem
          title="UI/UX Design Fundamentals"
          description="Learn the principles of good design"
          teacher={{
            name: "Mike Johnson",
            avatar: "/static/avatars/teacher-3.jpg"
          }}
          duration="6 weeks"
          level="intermediate"
          price={149}
        />
      </div>
    </div>
  );
}

export default CourseList;
import React from "react";

import CourseItem,{ CourseItemProps } from './item';

const data: CourseItemProps[] = [
  {
    id: 1,
    image: "/images/cyber-city.jpg",
    title: "Cyber City Clan",
    price: 1,
    symbol: "GAC", // 示例时间
    description: "Description",
    duration: "12 weeks",
    level: "beginner",
  },
  {
    id: 2,
    image: "/images/space-xy.jpg",
    title: "The Space XY",
    price: 1,
    symbol: "XYZ",
    description: "Description",
    duration: "12 weeks",
    level: "beginner",
  },
  {
    id: 3,
    image: "/images/kingdomx.jpg",
    title: "KingdomX",
    price: 1,
    symbol: "KTC",
    description: "Description",
    duration: "12 weeks",
    level: "beginner",
  },
  {
    id: 4,
    image: "/images/kingdomx.jpg",
    title: "KingdomX",
    price: 1,
    symbol: "KTC",
    description: "Description",
    duration: "12 weeks",
    level: "beginner",
  },
  {
    id: 5,
    image: "/images/kingdomx.jpg",
    title: "KingdomX",
    price: 1,
    symbol: "KTC",
    description: "Description",
    duration: "12 weeks",
    level: "beginner",
  },
];

export interface CourseListProps {}
const CourseList = ({ ...props }: CourseListProps) => {
  return (
    <div className="space-y-8 my-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {
          data.map((item) => (
            <CourseItem 
              key={item.id}
              {...item}            
            />
          ))  
        }
      </div>
    </div>
  );
}

export default CourseList;
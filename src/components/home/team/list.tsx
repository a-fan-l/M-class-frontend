import React from "react";
import ItemCard from "./item";

const teamList = [
  {
    name: "Berniece Tran",
    role: "Director",
    avatar: "/avatars/berniece.jpg", // 替换为实际头像路径
    socialLinks: {
      linkedin: "https://linkedin.com/in/berniece-tran",
      twitter: "https://twitter.com/berniece-tran",
      instagram: "https://instagram.com/berniece-tran",
    },
  },
  {
    name: "Nathan Bean",
    role: "Sr. UI Designer",
    avatar: "/avatars/nathan.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/nathan-bean",
    },
  },
  {
    name: "Lynnette Wilkes",
    role: "Fullstack Developer",
    avatar: "/avatars/lynnette.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/lynnette-wilkes",
      twitter: "https://twitter.com/lynnette-wilkes",
    },
  },
  {
    name: "Claudia Hicks",
    role: "Sr. Developer",
    avatar: "/avatars/claudia.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/claudia-hicks",
    },
  },
];

const TeamList = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamList.map((item, index) => (
        <ItemCard
          key={index}
          name={item.name}
          role={item.role}
          avatar={item.avatar}
          socialLinks={item.socialLinks}
        />
      ))}
    </div>
  );
};

export default TeamList;
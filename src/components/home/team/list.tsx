import React from "react";
import { useTranslations } from 'next-intl';

import ItemCard from "./item";

const TeamList = () => {
  const t = useTranslations('home');
  const teamList = [
    {
      name: "Berniece Tran",
      role: t("team.role.director"),  
      avatar: "/avatars/berniece.jpg", // 替换为实际头像路径
      socialLinks: {
        linkedin: "https://linkedin.com/in/berniece-tran",
        twitter: "https://twitter.com/berniece-tran",
        instagram: "https://instagram.com/berniece-tran",
      },
    },
    {
      name: "Nathan Bean",
      role: t("team.role.sr_ui_designer"),
      avatar: "/avatars/nathan.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/nathan-bean",
      },
    },
    {
      name: "Lynnette Wilkes",
      role: t("team.role.fullstack_developer"),
      avatar: "/avatars/lynnette.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/lynnette-wilkes",
        twitter: "https://twitter.com/lynnette-wilkes",
      },
    },
    {
      name: "Claudia Hicks",
      role: t("team.role.sr_developer"),
      avatar: "/avatars/claudia.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/claudia-hicks",
      },
    },
  ];
  return (
    <div className="w-full grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-8">
      {teamList.map((item, index) => (
        <ItemCard {...item} key={index} />
      ))}
    </div>
  );
};

export default TeamList;
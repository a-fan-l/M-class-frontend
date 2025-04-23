import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram } from "lucide-react";

import './style.css'; 
interface ItemCardProps {
  name: string;
  role?: string;
  avatar: string; // 头像图片的URL
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  role,
  avatar,
  socialLinks,
}) => {
  return (
    <div className="team-item">
      <div className="flex flex-col items-center py-10 px-6">
        <img
          // src={avatar}
          // alt={name}
          className="w-24 h-24 rounded-full mb-4 object-cover text-[var(--section-title)]"
        />
        <h4 className="font-bold text-lg mb-2 text-[var(--section-title)]">
          {name}
        </h4>
        <p className="mb-4 text-[var(--section-desc)]">
          {role}
        </p>
        <div className="flex space-x-2 pb-4">
          {socialLinks.linkedin && (
            <Button
              variant="ghost"
              size="icon"
              className="text-[var(--section-desc)]"
              asChild
            >
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          )}
          {socialLinks.twitter && (
            <Button
              variant="ghost"
              size="icon"
              className="text-[var(--section-desc)]"
              asChild
            >
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          )}
          {socialLinks.instagram && (
            <Button
              variant="ghost"
              size="icon"
              className="text-[var(--section-desc)]"
              asChild
            >
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
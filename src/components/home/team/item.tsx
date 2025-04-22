import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from '@utils/system/index';
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
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:scale-105",
      "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      "border border-border/50"
    )}>
      <CardContent className="flex flex-col items-center p-6">
        {/* 头像 */}
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        {/* 姓名 */}
        <h4 className="font-bold text-lg mb-2">
          {name}
        </h4>
        <p className="text-muted-foreground mb-4">
          {role}
        </p>
        {/* 社交媒体图标 */}
        <div className="flex space-x-2">
          {socialLinks.linkedin && (
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
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
              className="text-muted-foreground hover:text-foreground"
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
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
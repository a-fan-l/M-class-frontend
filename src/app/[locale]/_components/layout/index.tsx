'use client';

import React from "react";
import Header from "@/components/header";

import StarryCanvas from './starry-canvas';
import './style.css';

interface IIndexProps {
  children: React.ReactNode;
}

const Index: React.FC<IIndexProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <StarryCanvas />
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Index;

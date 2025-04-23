import React from "react";
import { useTranslations } from 'next-intl';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from '@utils/system/index';

import './style.css';

const Email = () => {
    const t = useTranslations('home');
    return (
        <div className='w-full md:mb-30'>
            <div className='container mx-auto'>
                <div className={cn(
                    "relative p-8 rounded-lg",
                    "bg-section-background/95 backdrop-blur supports-[backdrop-filter]:bg-section-background/60",
                    "email-area text-center active-shape hover-shape-inner"
                )}>
                    <h2 className="text-3xl font-bold pb-6 text-[var(--section-title)]">
                        {t('contact.title')}
                    </h2>
                    <div className="pb-20 pd:mb-8 text-xl text-[var(--section-desc)]">
                        {t('contact.description')}
                    </div>
                    <div className="max-w-2xl mx-auto flex flex-row gap-4">
                        <Input 
                            type="email" 
                            placeholder="Enter your email"  
                            className="w-full h-13 text-[var(--section-desc)] text-xl"
                        />
                        <Button className="bg-primary/30 hover:bg-primary/50 cursor-pointer h-13 px-6">
                            <span className="text-xl">Contact</span>
                        </Button>
                    </div>
                    <span className="border-shadow shadow-1"></span>
                    <span className="border-shadow shadow-2"></span>
                    <span className="border-shadow shadow-3"></span>
                    <span className="border-shadow shadow-4"></span>
                    <span className="hover-shape-bg hover_shape1"></span>
                    <span className="hover-shape-bg hover_shape2"></span>
                    <span className="hover-shape-bg hover_shape3"></span>
                </div>
            </div>
        </div>
    )
}

export default Email;
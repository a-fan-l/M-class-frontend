import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from '@utils/system/index';

import './style.css';

const Email = () => {
    return (
        <div className='w-full md:mt-10 md:mb-30'>
            <div className='container max-w-3xl mx-auto px-4'>
                <div className={cn(
                    "relative p-8 rounded-lg",
                    "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                    "email-area text-center active-shape hover-shape-inner"
                )}>
                    <h2 className="text-xl font-bold mb-8">
                        Get alerts 💌 for new IGOs & IDOs
                    </h2>
                    <div className="text-muted-foreground mb-10 md:mb-8">
                        Sign up for newsletter to get more IGO/IDO News and Updates
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Input 
                            type="email" 
                            placeholder="Enter your email"  
                            className="md:w-[400px] md:h-11 fadeInUp" 
                        />
                        <Button className="relative md:h-11 bg-[#A3FF12] hover:bg-[#8FE610] text-black font-bold">
                            Contact
                            <span className="hover-shape1"></span>
                            <span className="hover-shape2"></span>
                            <span className="hover-shape3"></span>
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
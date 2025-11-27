import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className,
  hover = true 
}) => {
  return (
    <div
      className={cn(
        "rounded-lg p-6 bg-card border border-border shadow-card transition-smooth text-base",
        hover && "hover:shadow-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  icon: Icon, 
  size = 'md',
  variant = 'default',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-xs px-3 py-1.5',
    lg: 'text-sm px-4 py-2'
  };

  const variantClasses = {
    default: 'bg-gradient-to-r from-[#e67e22] to-[#c2410c] text-white shadow-sm',
    outline: 'bg-transparent border border-[#e67e22] text-[#e67e22]',
    ghost: 'bg-[#e67e22] bg-opacity-10 text-[#e67e22]'
  };

  const iconSizes = {
    sm: 10,
    md: 12,
    lg: 14
  };

  return (
    <span className={`
      ${sizeClasses[size]} 
      ${variantClasses[variant]} 
      rounded-full font-semibold flex items-center gap-1.5
      ${className}
    `}>
      {Icon && (
        <Icon 
          size={iconSizes[size]} 
          className={variant === 'default' ? 'text-yellow-200' : 'text-[#e67e22]'} 
        />
      )}
      {children}
    </span>
  );
};

export default Badge;

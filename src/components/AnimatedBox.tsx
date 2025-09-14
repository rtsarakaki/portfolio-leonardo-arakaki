'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBoxProps {
  children: React.ReactNode;
  direction: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  children,
  direction,
  className = ''
}) => {
  const getAnimationProps = () => {
    const baseProps = {
      initial: { opacity: 0 },
      animate: { 
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: "easeOut"
        }
      },
      exit: { 
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeIn"
        }
      }
    };

    switch (direction) {
      case 'left':
        return {
          ...baseProps,
          initial: { x: -50, opacity: 0 },
          animate: { 
            x: 0, 
            opacity: 1,
            transition: {
              duration: 0.7,
              ease: "easeOut"
            }
          },
          exit: { 
            x: -50, 
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: "easeIn"
            }
          }
        };
      case 'right':
        return {
          ...baseProps,
          initial: { x: 50, opacity: 0 },
          animate: { 
            x: 0, 
            opacity: 1,
            transition: {
              duration: 0.7,
              ease: "easeOut"
            }
          },
          exit: { 
            x: 50, 
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: "easeIn"
            }
          }
        };
      case 'top':
        return {
          ...baseProps,
          initial: { y: -50, opacity: 0 },
          animate: { 
            y: 0, 
            opacity: 1,
            transition: {
              duration: 0.7,
              ease: "easeOut"
            }
          },
          exit: { 
            y: -50, 
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: "easeIn"
            }
          }
        };
      case 'bottom':
        return {
          ...baseProps,
          initial: { y: 50, opacity: 0 },
          animate: { 
            y: 0, 
            opacity: 1,
            transition: {
              duration: 0.7,
              ease: "easeOut"
            }
          },
          exit: { 
            y: 50, 
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: "easeIn"
            }
          }
        };
      default:
        return baseProps;
    }
  };

  return (
    <motion.div
      {...getAnimationProps()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;

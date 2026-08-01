'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { motionTokens } from '@/lib/motion-tokens';

export interface AnimatedWord {
  text: string;
  className?: string;
}

interface AnimatedTextProps {
  words: AnimatedWord[];
  className?: string;
  delay?: number;
  stagger?: number;
}

export function AnimatedText({ words, className, delay = 0, stagger = 0.06 }: AnimatedTextProps) {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className={className}>{words.map((w) => w.text).join(' ')}</span>;
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay, staggerChildren: stagger }}
      style={{ perspective: 800 }}
    >
      {words.map((word, i) => {
        const hasGradient = Boolean(word.className);
        return (
          <motion.span
            key={i}
            className={`inline-block ${word.className ?? ''}`}
            style={{ marginRight: '0.25em', transformOrigin: '0 50%' }}
            variants={
              reduce || hasGradient
                ? { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }
                : {
                    hidden: { opacity: 0, y: 18, rotateX: -90 },
                    visible: { opacity: 1, y: 0, rotateX: 0 },
                  }
            }
            transition={{
              duration: motionTokens.duration.normal,
              ease: motionTokens.easing.smooth,
            }}
          >
            {word.text}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { motionTokens, springs } from '@/lib/motion-tokens';

const LGPD_KEY = 'lgpd-consent';

export function LGPDBanner() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.localStorage.getItem(LGPD_KEY)) {
      setVisible(true);
    }
  }, []);

  const close = (choice: 'accepted' | 'refused') => {
    window.localStorage.setItem(LGPD_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Aviso de privacidade"
          className="fixed inset-x-4 bottom-20 z-[60] mx-auto max-w-2xl md:bottom-6"
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 24 }}
          transition={reduce ? { duration: motionTokens.duration.fast } : springs.snappy}
        >
          <div className="flex flex-col gap-md rounded-2xl border border-outline-variant bg-surface/95 p-md shadow-2xl backdrop-blur-md sm:flex-row sm:items-center">
            <div className="flex items-start gap-md">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <p className="text-body-md text-on-surface-variant">
                Usamos cookies e dados pessoais para melhorar sua experiência, conforme a LGPD.
              </p>
            </div>
            <div className="flex shrink-0 gap-sm sm:ml-auto">
              <button
                type="button"
                onClick={() => close('refused')}
                className="rounded-full border-2 border-primary px-4 py-2 text-label-lg font-semibold text-primary transition-colors hover:bg-primary-fixed/60"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => close('accepted')}
                className="rounded-full brand-gradient px-4 py-2 text-label-lg font-semibold text-white shadow-lg shadow-primary/20"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

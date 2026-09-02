'use client';

import { createContext, ReactNode, useCallback, useContext, useRef, useState } from 'react';

type ToastContextValue = {
  showToast: (message: ReactNode) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<ReactNode>(null);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: ReactNode) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage(msg);
    setVisible(true);
    timerRef.current = setTimeout(() => setVisible(false), 4200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={`toast ${visible ? 'show' : ''} bg-carbon text-white py-[15px] px-[26px] rounded-full text-[14.5px] border border-line-dark shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] [&_b]:text-gold`}
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

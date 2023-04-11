import { ReactNode } from 'react';

interface ValueBoxProps {
  children?: ReactNode;
  isTotal?: boolean;
}

export function ValueBox({ children, isTotal = false }: ValueBoxProps) {
  return (
    <div
      className={`w-[30%] h-[136px] px-8 pt-6 pb-5  rounded-lg relative flex flex-col justify-between ${
        isTotal ? 'bg-emerald-500' : 'bg-white'
      }`}
    >
      {children}
    </div>
  );
}

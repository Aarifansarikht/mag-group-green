
import React from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Button Component
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        suppressHydrationWarning
        className={cn(
          "inline-flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-cobalt text-white hover:bg-cobalt-600 shadow-lg shadow-cobalt/20': variant === 'default',
            'border-2 border-tech-300 bg-transparent hover:border-cobalt hover:text-cobalt text-ink': variant === 'outline',
            'hover:bg-tech-100 hover:text-cobalt': variant === 'ghost',
            'text-cobalt underline-offset-4 hover:underline': variant === 'link',
            'h-12 px-8': size === 'default',
            'h-10 px-6 text-[10px]': size === 'sm',
            'h-16 px-10 text-sm': size === 'lg',
            'h-12 w-12': size === 'icon',
          },
          className
        )}
        {...props}
      >
        <span className="inline-flex items-center gap-2">
          {props.children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

// Input Component
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        suppressHydrationWarning
        className={cn(
          "flex h-12 w-full rounded-2xl border border-tech-300 bg-white px-4 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-tech-400 focus-visible:outline-none focus-visible:border-cobalt focus-visible:ring-1 focus-visible:ring-cobalt disabled:cursor-not-allowed disabled:opacity-50 shadow-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// AccordionItem Component
export interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border border-tech-300 rounded-2xl mb-3 overflow-hidden bg-white shadow-sm transition-all hover:border-cobalt/50">
      <button
        onClick={onClick}
        className={cn(
          "flex w-full items-center justify-between p-6 text-left focus:outline-none transition-colors",
          isOpen ? "bg-tech-50" : "bg-white"
        )}
      >
        <span className={cn(
          "text-sm font-bold uppercase tracking-wider transition-colors",
          isOpen ? "text-cobalt" : "text-ink"
        )}>
          {title}
        </span>
        <div className={cn(
          "h-8 w-8 rounded-full flex items-center justify-center transition-all",
          isOpen ? "bg-cobalt text-white rotate-180" : "bg-tech-100 text-tech-500"
        )}>
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      {isOpen && (
        <div className="p-6 pt-2 border-t border-tech-200 bg-tech-50/30">
          {children}
        </div>
      )}
    </div>
  );
};

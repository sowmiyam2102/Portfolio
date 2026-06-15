import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-display font-medium text-sm rounded-xl px-5 py-3 transition-all duration-300 cursor-pointer outline-hidden focus:ring-2 focus:ring-violet-500/50';
  
  const variants = {
    primary: 'bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-violet-500/35 border border-violet-400/20',
    secondary: 'bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white shadow-md border border-slate-800 dark:border-slate-700',
    outline: 'bg-transparent border border-gray-300 dark:border-gray-800 hover:border-violet-500/50 text-slate-700 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400',
    glow: 'bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 hover:from-violet-700 hover:via-indigo-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 relative overflow-hidden group',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}

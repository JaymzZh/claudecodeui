import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

type CursorLogoProps = {
  className?: string;
};

const CursorLogo = ({ className = 'w-5 h-5' }: CursorLogoProps) => {
  const { isDarkMode } = useTheme();

  return (
    <img
      src={isDarkMode ? `${import.meta.env.BASE_URL}icons/cursor-white.svg` : `${import.meta.env.BASE_URL}icons/cursor.svg`}
      alt="Cursor"
      className={className}
    />
  );
};

export default CursorLogo;

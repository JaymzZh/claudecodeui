import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

type CodexLogoProps = {
  className?: string;
};

const CodexLogo = ({ className = 'w-5 h-5' }: CodexLogoProps) => {
  const { isDarkMode } = useTheme();

  return (
    <img
      src={isDarkMode ? `${import.meta.env.BASE_URL}icons/codex-white.svg` : `${import.meta.env.BASE_URL}icons/codex.svg`}
      alt="Codex"
      className={className}
    />
  );
};

export default CodexLogo;

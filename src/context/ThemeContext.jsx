import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  isDark: true,
});

export function ThemeProvider({ children }) {
  useEffect(() => {
    // Apply permanent luxury dark theme
    const root = document.documentElement;
    root.setAttribute('data-theme', 'dark');
    root.classList.add('dark');
    root.classList.remove('light');
    try {
      localStorage.setItem('gwd-theme', 'dark');
    } catch (e) {
      // Ignore
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', toggleTheme: () => {}, isDark: true }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

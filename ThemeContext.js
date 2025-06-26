import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const colors = darkMode
    ? { background: '#333', text: '#fff', card: '#444' }
    : { background: '#fff', text: '#000', card: '#eee' };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};




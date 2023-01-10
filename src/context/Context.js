import { useState, createContext, useLayoutEffect } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(false);
  const [defaultColor, setDefaultColor] = useState(false);
  const toggleTheme = () => setTheme(!theme);
  const toggleColorText = () => setDefaultColor(!defaultColor);

  useLayoutEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem('theme')));
  }, []);

  useLayoutEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <ThemeContext.Provider
        value={{ theme, toggleTheme, defaultColor, toggleColorText }}
      >
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, ThemeContextProvider };

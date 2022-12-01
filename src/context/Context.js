import { useState, createContext } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(false);
  const [defaultColor, setDefaultColor] = useState(true);
  const toggleTheme = () => setTheme(!theme);
  const toggleColorText = () => setDefaultColor(!defaultColor);
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

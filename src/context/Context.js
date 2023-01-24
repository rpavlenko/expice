import { useState, createContext } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(window.__theme === 'true');
  const [checked, setChecked] = useState(window.__theme === 'false');
  const [defaultColor, setDefaultColor] = useState(false);

  if (typeof window === 'undefined') {
    return null;
  }
  const toggleTheme = () => setTheme(!theme);

  const toggleChecked = () => {
    setChecked(checked => !checked);
    window.__setPreferredTheme(checked ? 'true' : 'false');
  };

  const toggleColorText = () => setDefaultColor(!defaultColor);

  return (
    <div>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
          toggleColorText,
          toggleChecked,
          defaultColor,
          checked,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, ThemeContextProvider };

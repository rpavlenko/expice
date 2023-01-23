import { useState, createContext, useLayoutEffect, useCallback } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  if (typeof window === 'undefined') {
    return null;
  }

  const [theme, setTheme] = useState(window.__theme === 'true');
  const [checked, setChecked] = useState(window.__theme === 'false');
  const [defaultColor, setDefaultColor] = useState(false);
  const toggleTheme = () => setTheme(!theme);
  const toggleChecked = () => {
    setChecked(checked => !checked);
    window.__setPreferredTheme(checked ? 'true' : 'false');
  };
  const toggleColorText = () => setDefaultColor(!defaultColor);

  // useLayoutEffect(() => {
  //   setTheme(JSON.parse(window.localStorage.getItem('theme')));
  // }, []);

  // useLayoutEffect(() => {
  //   window.localStorage.setItem('theme', theme);
  // }, [theme]);

  // const onChange = useCallback(
  //   e => {
  //     // const isChecked = e.target.checked;
  //     // setChecked(isChecked);
  //     // setTheme(isChecked);
  //     // window.__setPreferredTheme(isChecked ? 'true' : 'false');
  //   },
  //   [setChecked]
  // );

  return (
    <div>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
          defaultColor,
          toggleColorText,
          // onChange,
          toggleChecked,
          checked,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, ThemeContextProvider };

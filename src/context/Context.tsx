import { useState, createContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import { authFirebase } from '../utils/firebase';

interface ThemeContextProps {
  theme: boolean;
  toggleTheme: () => void;
  toggleColorText: () => void;
  toggleChecked: () => void;
  defaultColor: boolean;
  checked: boolean;
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
interface AuthContextProps {
  authentification: {
    displayName: string;
  };
  logIn(): void;
  logOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthContextProvider(props: Props) {
  const auth = useAuth(authFirebase);

  return (
    <div>
      <AuthContext.Provider
        value={{
          ...auth,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}

function ThemeContextProvider(props: Props) {
  if (typeof window === 'undefined') {
    return null;
  }

  const [theme, setTheme] = useState(window.__theme === 'true');
  const [checked, setChecked] = useState(window.__theme === 'false');
  const [defaultColor, setDefaultColor] = useState(window.__theme === 'true');

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

export { ThemeContext, ThemeContextProvider, AuthContext, AuthContextProvider };

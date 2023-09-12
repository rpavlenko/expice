import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';

import * as styles from './Post.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function Post({ children }: Props) {
  const { theme } = useContext(ThemeContext) || false;
  return (
    <div
      className={`${styles.postWrapper} ${
        theme ? styles.postWrapperGreen : ''
      }`}
    >
      {children}
    </div>
  );
}

import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';

import './SectionTitle.scss';

export default function SectionTitle({ sectionTitle, className }) {
  const { theme } = useContext(ThemeContext) || false;

  return (
    <h2
      className={`${className}
  ${theme ? 'sectionTitleGreen' : ''}`}
    >
      {sectionTitle}
    </h2>
  );
}

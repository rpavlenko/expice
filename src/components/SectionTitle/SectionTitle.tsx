import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';

import './SectionTitle.scss';

interface ISectionTitle {
  sectionTitle: string;
  className: string;
}

export default function SectionTitle({
  sectionTitle,
  className,
}: ISectionTitle) {
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

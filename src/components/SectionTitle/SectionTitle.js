import * as styles from './SectionTitle.module.scss';

export default function SectionTitle({ sectionTitle }) {
  return <h2 className={styles.sectionTitle}>{sectionTitle}</h2>;
}

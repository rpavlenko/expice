import * as styles from './PostTitle.module.scss';

export default function PostTitle({ title }) {
  return <h5 className={styles.postTitle}>{title}</h5>;
}

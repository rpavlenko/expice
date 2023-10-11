import * as styles from './PostTitle.module.scss';

interface IPostTitle {
  title: string;
}

export default function PostTitle({ title }: IPostTitle) {
  return <h5 className={styles.postTitle}>{title}</h5>;
}

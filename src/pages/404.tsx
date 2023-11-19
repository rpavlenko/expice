import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function NotFound() {
  return (
    <>
      <div className="page404">
        <p className="titlePage404">Sorry, page doesn't exists</p>
        <StaticImage src="../images/404.jpg" alt="404 image" />
        <Link className="linkPage404" to="/">
          Go back
        </Link>
        <a className="imageLicensePage404" href="http://www.freepik.com">
          Designed by Freepik
        </a>
      </div>
    </>
  );
}

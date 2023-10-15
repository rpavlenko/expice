import { Link } from 'gatsby';

export default function NotFound() {
  return (
    <>
      <div className="page404">
        <p className="titlePage404">Sorry, page doesn't exists</p>
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

import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <Link to="/" className="logo">
        <h1>{title}</h1>
      </Link>
      <div className="links">
        <Link to="/menu-one">Menu One</Link>
        <Link to="/menu-two">Menu Two</Link>
        <Link to="/menu-three">Menu Three</Link>
        <Link to="/menu-four">Menu Four</Link>
      </div>
    </nav>
  );
}

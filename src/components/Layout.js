import Navbar from './Navbar';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/style.sass';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query Copyright {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  const { copyright } = data.site.siteMetadata;

  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>{copyright}</p>
      </footer>
    </div>
  );
}

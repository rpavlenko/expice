import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import { graphql } from 'gatsby';

export default function About({ data }) {
  return (
    <>
      <Layout>
        <div className="container">
          <h1>New Page</h1>
          {data.allWpPost.nodes.map(node => (
            <div>
              <p>{node.title}</p>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut
            suscipit aliquid ipsa dolores ad beatae reiciendis doloribus nemo et
            minima, quibusdam earum consectetur quisquam molestiae reprehenderit
            at quo fuga, rerum perferendis ipsam vero ipsum nihil! Ducimus illum
            nihil, repellat, nobis accusamus ab consequuntur illo velit omnis
            error facilis placeat expedita nisi perspiciatis inventore numquam?
            Necessitatibus expedita beatae quasi in. Dolor mollitia adipisci
            ipsum, id itaque debitis tempore quidem necessitatibus eaque quo
            sequi tempora amet accusamus ad blanditiis totam nisi earum fugit
            alias quasi reprehenderit rerum hic maxime quas? Maxime accusamus et
            modi, cum inventore eos minus nam iste temporibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut
            suscipit aliquid ipsa dolores ad beatae reiciendis doloribus nemo et
            minima, quibusdam earum consectetur quisquam molestiae reprehenderit
            at quo fuga, rerum perferendis ipsam vero ipsum nihil! Ducimus illum
            nihil, repellat, nobis accusamus ab consequuntur illo velit omnis
            error facilis placeat expedita nisi perspiciatis inventore numquam?
            Necessitatibus expedita beatae quasi in. Dolor mollitia adipisci
            ipsum, id itaque debitis tempore quidem necessitatibus eaque quo
            sequi tempora amet accusamus ad blanditiis totam nisi earum fugit
            alias quasi reprehenderit rerum hic maxime quas? Maxime accusamus et
            modi, cum inventore eos minus nam iste temporibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut
            suscipit aliquid ipsa dolores ad beatae reiciendis doloribus nemo et
            minima, quibusdam earum consectetur quisquam molestiae reprehenderit
            at quo fuga, rerum perferendis ipsam vero ipsum nihil! Ducimus illum
            nihil, repellat, nobis accusamus ab consequuntur illo velit omnis
            error facilis placeat expedita nisi perspiciatis inventore numquam?
            Necessitatibus expedita beatae quasi in. Dolor mollitia adipisci
            ipsum, id itaque debitis tempore quidem necessitatibus eaque quo
            sequi tempora amet accusamus ad blanditiis totam nisi earum fugit
            alias quasi reprehenderit rerum hic maxime quas? Maxime accusamus et
            modi, cum inventore eos minus nam iste temporibus?
          </p> */}
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        slug
      }
    }
  }
`;

import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import '../styles/style.sass';

export default function Home() {
  return (
    <Layout>
      {/* <div className="container"> */}
      <Hero />
      {/* </div> */}
    </Layout>
  );
}

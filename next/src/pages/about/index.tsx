import { Layout } from '@/components/layout';

const About = () => {
  return (
    <Layout page="about Sen Hongo">
      <article className="contents">
        <p>
          I'm a freelance software engineer building
          <a href="https://millefeuille.app/">Millefeuille</a>, a personal
          finance managment app.
        </p>
      </article>
    </Layout>
  );
};

export default About;

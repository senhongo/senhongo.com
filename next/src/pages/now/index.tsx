import { Layout } from '@/components/layout';

const About = () => {
  return (
    <Layout page="what's going on now">
      <article className="contents">
        <section className="taxonomy">
          Updated: <em>1st September, 2025</em>
        </section>

        <h2>
          <a href="https://millefeuille.app/">
            Millefeuille v0.0.1 - <em>the proof of concept</em>
          </a>
        </h2>
        <p>Updates coming in September.</p>
      </article>
    </Layout>
  );
};

export default About;

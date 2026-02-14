import { Layout } from '@/components/layout';

const About = () => {
  return (
    <Layout page="projects I've worked on">
      <article className="contents">
        <h2>
          <a href="https://millefeuille.app">Millefeuille</a>, Current
        </h2>
        <p>Cash flow prediction and personal finance management tool.</p>
        <p>
          This is something very close to my heart. It's in the early stages now
          and there will be a public demo soon.
        </p>

        <h2>
          <a href="https://www.chubic.com">Chubic</a>, 2021 - Current
        </h2>
        <p>Lighting layout tool with algorithmic layout generation.</p>
        <p>Started off as engineer number 2, then became the tech lead.</p>

        <h2>
          <a href="https://product.strap.app">Strap</a>, 2020
        </h2>
        <p>Collaborative whiteboarding webapp.</p>
        <p>
          First introduction to React and Firebase. My focus was designing the
          initial data structures for nesting large amounts of as yet unknown
          objects. Oh yeah, do it in NoSQL too. Was a great learning experience.
        </p>

        <h2>
          <a href="https://goodpatch.com/news/prott_thanks-for-10yrs">Prott</a>,
          2019 - 2020
        </h2>
        <p>Browser based tool for creating mobile prototypes.</p>
        <p>
          Found out on my first day that I was going to be the lead maintainer.
          Surprise!
          <br /> Ironed out several bugs and fixed several performance issues.
          Also organised and lead the refactor from coffeescript to typescript.
        </p>
        <p>custom forked angular.js front end with Rails back end.</p>

        <h2>
          <a href="https://www.desamis.co.jp/service/u-motion-1">U-Motion</a>,
          2018
        </h2>
        <p>Dashboard software for managing cattle.</p>
        <p>angular.js front end with Node.js and Rails back end.</p>

        <h2>
          <a href="https://caprofitx.jp">ProFitX</a>, 2015 - 2017
        </h2>
        <p>
          Internal tooling and dashboard to help take the administration load
          off the sales team so they could focus on sales.
        </p>
        <p>angular.js + Typescript front end with Scala back end.</p>

        <h2>
          ProCare Electronic Medical Records and Pharmacy systems, 2012 - 2014
        </h2>
        <p>
          My first proper software job was working on life saving software! It
          was a huge piece of software, managing patient records and history
          while also handling appointments and pharmacy inventory.
        </p>
        <p>Old C codebase running since the late 90s. SQL, SQL everywhere.</p>
      </article>
    </Layout>
  );
};

export default About;

import type { GetStaticProps } from 'next';
import type { IArticle } from '@/components/article';

import { Layout } from '@/components/layout';
import { BlogRoll } from '@/components/blog-roll';
import { posts } from '@/library/posts';

type Props = {
  articles: IArticle[];
};

const Home = ({ articles }: Props) => {
  return (
    <>
      <div className="grid-auto-fill override-grid-col-size">
        <div>test grid</div>
        <div>test grid</div>
        <div>test grid</div>
        <div>test grid</div>
        <div>test grid</div>
      </div>
      <Layout page="articles">
        <BlogRoll articles={articles} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await posts();

  const articles = res.map((article) => ({
    id: article.id,
    data: article.contents.data,
  }));

  return {
    props: {
      articles,
    },
  };
};

export default Home;

import type { GetStaticProps } from 'next';
import type { IArticle } from '@/components/article';

import { Layout } from '@/components/layout';
import { BlogRoll } from '@/components/blog-roll';
import { posts } from '@/library/posts';

type Props = {
  articles: IArticle[];
};

const BlogIndex = ({ articles }: Props) => {
  return (
    <Layout page={`all articles (${articles.length})`}>
      <BlogRoll articles={articles} />
    </Layout>
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

export default BlogIndex;

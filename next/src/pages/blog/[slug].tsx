import type { GetStaticProps } from 'next';
import type { IArticle } from '@/components/article';

import { remark } from 'remark';
import remarkHtml from 'remark-html';

import { posts } from '@/library/posts';
import { Layout } from '@/components/layout';
import { Article } from '@/components/article';

type Props = {
  article: IArticle;
};

const Blog = ({ article }: Props) => {
  return (
    <Layout page={article.data.title}>
      <Article article={article} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await posts();

  const paths = res.map((a) => ({
    params: { slug: a.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await posts();

  const article = await res
    .filter((a) => a.id === params.slug)
    .map(async (a) => ({
      data: a.contents.data,
      content: await (
        await remark().use(remarkHtml).process(a.contents.content)
      ).toString(),
    }))[0];

  return {
    props: {
      article,
    },
  };
};

export default Blog;

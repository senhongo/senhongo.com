import type { IArticle } from '@/components/article';

type Props = {
  articles: IArticle[];
};

export function BlogRoll({ articles }: Props) {
  return articles.map((a) => (
    <article className="blog-roll" key={a.id}>
      <span className="blog-roll--date">{a.data.date}</span>

      <h2>
        <a className="blog-roll--title" href={`/blog/${a.id}`}>
          {a.data.title}
        </a>
      </h2>

      <span className="blog-roll--category">{a.data.category}</span>
    </article>
  ));
}

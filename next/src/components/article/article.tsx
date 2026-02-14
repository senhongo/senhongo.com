import type { IArticle } from './types';

type Props = {
  article: IArticle;
};

export const Article = ({ article }: Props) => {
  const {
    data: { date, tags, series, category },
    content,
  } = article;
  return (
    <>
      <div className="metadata">
        <span>published: {date}</span>

        <section className="taxonomy">
          {category && (
            <section>
              <span>category: {category}</span>
            </section>
          )}

          {series && (
            <section>
              <span>
                part of series: <a>{series}</a>
              </span>
            </section>
          )}

          {tags?.length > 0 && (
            <section>
              tags:
              {tags.map((t, i) => (
                <span key={t}>
                  {i > 0 && ','} {t}
                </span>
              ))}
            </section>
          )}
        </section>
      </div>

      <article
        className="contents"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </>
  );
};

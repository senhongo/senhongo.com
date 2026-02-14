export type IArticle = {
  content: string;
  id: string;
  data: {
    date: string;
    description: string;
    series: string;
    tags: string[];
    category: string;
    title: string;
  };
};

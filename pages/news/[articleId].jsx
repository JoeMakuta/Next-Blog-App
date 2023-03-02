import Link from "next/link";

const Article = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <p>{article.category}</p>
      <Link href="/news" >Back</Link>
    </div>
  );
};

export default Article;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `http://localhost:4000/news/${context.params.articleId}`
  );
  const data = await response.json();

  return {
    props: {
      article: data,
    },
  };
};

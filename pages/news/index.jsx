import Link from "next/link";

const News = ({ news }) => {
  return (
    <div>
      <h1>The list of posts :</h1>
      <div>
        {news.map((article) => {
          return (
            <div key={article.id}>
              <h2>Article {article.id}</h2>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p>Category : {article.category}</p>
            </div>
          );
        })}
      </div>
      <Link href="/">Home</Link>
    </div>
  );
};

export default News;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
};

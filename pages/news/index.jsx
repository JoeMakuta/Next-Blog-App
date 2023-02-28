import Link from "next/link";

const News = ({ news }) => {
  return (
    <div>
      <h1>The list of posts :</h1>
      <div>
        {news.map((article) => {
          return (
            <Link key={article.id} href={`/news/${article.id}`}>
              <h2>Article {article.id} : {article.title}</h2>
             
            </Link>
          );
        })}
      </div>
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

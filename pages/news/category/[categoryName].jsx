import Link from "next/link";
import { useRouter } from "next/router";

const Category = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <h1>Category : {router.query.categoryName}</h1>
      <div>
        {data.map((article) => {
          return (
            <Link key={article.id} href={`/news/${article.id}`} >
              <div>{article.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `http://localhost:4000/news?category=${context.params.categoryName}`
  );
  const data = await response.json();

  console.log("The data : ", data);
  
  if(data.length === 0){
    return {
        notFound : true
    }
  }

  return {
    props: {
      data,
    },
  };
};

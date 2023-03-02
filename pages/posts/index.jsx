import Link from "next/link";
import { Suspense } from "react";

export const Loader = () => {
  return <div>Loading ...</div>;
};

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>List of posts : </h1>
      {posts.map((elt) => {
        return (
          <div key={elt.id}>
            <Link href={`/posts/${elt.id}`}>Post {elt.id}</Link>
            <h3>{elt.title}</h3>
            <p>{elt.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  console.log("Revalidating called ...");
  const response = await fetch("http://localhost:4000/posts").then((data) =>
    data.json()
  );

  return {
    props: {
      posts: response,
    },
    revalidate: 10,
  };
};

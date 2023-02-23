import Link from "next/link";

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
      <Link href={"/"} >Home</Link>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0,5),
    },
  };
};

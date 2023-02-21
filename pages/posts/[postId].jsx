import Link from "next/link";

const SinglePost = ({ post }) => {
  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={"/posts"}>Back</Link>
    </div>
  );
};

export default SinglePost;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((elt) => {
    return {
      params: {
        postId: `${elt.id}`,
      },
    };
  });

  return {
    //  paths: [
    //    {
    //      params: { postId: "1" },
    //    },
    //    {
    //      params: { postId: "2" },
    //    },
    //    {
    //      params: { postId: "3" },
    //    },
    //  ],
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log("Context : ", context);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};

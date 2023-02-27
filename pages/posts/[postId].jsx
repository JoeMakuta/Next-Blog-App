import Link from "next/link";
import { useRouter } from "next/router";

const SinglePost = ({ post }) => {
  if (useRouter().isFallback) {
    return <h1>Loading ...</h1>;
  }

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
  const response = await fetch("http://localhost:4000/posts");
  const data = await response.json();

  const paths = data.slice(0, 2).map((elt, index) => {
    return {
      params: {
        postId: `${elt?.id}`,
      },
    };
  });

  return {
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },

    //    {
    //      params: { postId: "2" },
    //    },
    //    {
    //      params: { postId: "3" },
    //    },
    //  ],
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  if (0 > context.params.postId || context.params.postId > 10) {
    return {
      notFound: true,
    };
  }

  console.log("Context : ", context);

  const response = await fetch(
    `http://localhost:4000/posts/${context.params.postId}`
  );

  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};

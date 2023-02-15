import Link from "next/link";
import { useRouter } from "next/router";

const SingleBlog = () => {
  const { blogNumber } = useRouter().query;
  return (
    <div>
      <h1>Blog {blogNumber}</h1>
      <p>These are the details about the blog {blogNumber}</p>
      <Link href='/'>Home</Link>
      <Link href='/blog'>Blogs</Link>
    </div>
  );
};

export default SingleBlog;

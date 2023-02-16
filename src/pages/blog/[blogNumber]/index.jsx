import Link from "next/link";
import styles from "../../../components/singleblog.module.css";
import { useRouter } from "next/router";

const SingleBlog = () => {
  const { blogNumber } = useRouter().query;
  return (
    <div className={styles.container}>
      <h1>Blog {blogNumber}</h1>
      <p>These are the details about the blog {blogNumber}</p>
      <Link href="/">Home</Link>
      <Link href="/blog">Blogs</Link>
    </div>
  );
};

export default SingleBlog;

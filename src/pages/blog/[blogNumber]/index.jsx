import Link from "next/link";
import styles from "../../../components/singleblog.module.css";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

const SingleBlog = () => {
  const { blogNumber } = useRouter().query;
  return (
    <Layout>
      <div>
        <h1>Blog {blogNumber}</h1>
        <p>These are the details about the blog {blogNumber}</p>
        <Link href="/">Home</Link>
        <Link href="/blog">Blogs</Link>
      </div>
    </Layout>
  );
};

export default SingleBlog;

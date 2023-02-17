import Link from "next/link";

const blogs = ["Blog 1", "Blog 2", "Blog 3"];

const Blog = () => {
  return (
    <div>
      <h1>Hello, this is the blog page</h1>
      <ul>
        <p> Here is the blog list :</p>
        {blogs.map((elt, index) => {
          return (
            <li key={index}>
              <Link href={`/blog/${index + 1}`}>{elt}</Link>
            </li>
          );
        })}
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Blog;

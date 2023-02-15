import { useRouter } from "next/router";

const SingleBlog = () => {
  const router = useRouter();
  return (
    <div>
      Blog Number : {router.query.blogNumber}, Blog Id : {router.query.blogId}
    </div>
  );
};

export default SingleBlog;

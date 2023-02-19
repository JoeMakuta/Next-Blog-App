import Link from "next/link";

const UsersList = () => {
  return (
    <div>
      <h1>List of users</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default UsersList;

export const getStaticProps = async () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((data) => console.log(data));
};

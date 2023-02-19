import Link from "next/link";

const UsersList = (props) => {
  return (
    <div>
      <h1>List of users</h1>
      {props.users.map((user, index) => {
        return (
          <div key={index}>
            <p>User {index+1}: {user.username}</p>
          </div>
        );
      })}
      <Link href="/">Home</Link>
    </div>
  );
};

export default UsersList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};

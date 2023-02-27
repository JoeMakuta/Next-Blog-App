import User from "components/user";
import Link from "next/link";
import styles from "../../components/user.module.css";

const UsersList = (props) => {
  return (
    <div>
      <h1>List of users</h1>
      {props.users.map((user, index) => {
        return (
          <div key={index} className={styles.container}>
            <User user={user} index={index}></User>
          </div>
        );
      })}
      <Link href="/">Home</Link>
    </div>
  );
};

export default UsersList;

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};

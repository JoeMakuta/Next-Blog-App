const User = ({ user, index }) => {
  return (
    <div >
      <h2>User #{index + 1}</h2>
      <p>Username : {user.username}</p>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default User;

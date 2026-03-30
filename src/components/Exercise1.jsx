import { users } from "../data/data";

const Exercise1 = () => {
  const listUsers = users.map((user) => {
    if (user.age > 18) {
      return <li>{user.name}（成人）</li>;
    } else {
      return <li>{user.name}</li>;
    }
  });

  return <ul>{listUsers}</ul>;
};

export default Exercise1;

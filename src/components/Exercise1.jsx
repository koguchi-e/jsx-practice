import { users } from "../data/data";

const Exercise1 = () => {
  const listUsers = users.map((user) => {
    const adult = user.age >= 18 ? "（成人）" : "";
    return <li key={user.id}>{user.name + adult}</li>;
  });

  return <ul>{listUsers}</ul>;
};

export default Exercise1;

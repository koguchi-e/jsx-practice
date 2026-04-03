import { users } from "../data/data";

const Exercise1 = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.age >= 18 ? user.name + "（成人）" : user.name}
        </li>
      ))}
    </ul>
  );
};

export default Exercise1;

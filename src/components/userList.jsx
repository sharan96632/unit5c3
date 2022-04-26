import { useEffect, useState } from "react";
import axios from "axios";

export const EmployeeList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUser(data.data);
    });
  }, []);
  return (
    <div>
      {useEffect.map((user) => (
        <p key={user.id}>
          {user.id}.{user.first_name}
        </p>
      ))}
    </div>
  );
};

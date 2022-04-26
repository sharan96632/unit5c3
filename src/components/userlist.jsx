import { useEffect, useState } from "react";
import axios from "axios";

export const Userlist = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setuser(data.data);
    });
  }, []);
  return (
    <div>
      {useEffect.map((user) => (
        <p>
          {user.id}.{user.first_name}
        </p>
      ))}
    </div>
  );
};

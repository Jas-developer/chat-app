import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUsername: setLoginUserName, setId } = useContext<any>(UserContext);

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await axios.post("/register", { username, password });
    setLoginUserName(username);
    setId(data._id);
  };

  return (
    <div className="bg-blue-50 h-screen flex items-center ">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="username"
          className="block w-full  rounded-sm p-2 mb-2 outline-none"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 outline-none"
        />
        <button className="p-2 bg-blue-500 text-white block w-full rounded-sm">
          Register
        </button>
      </form>
    </div>
  );
}

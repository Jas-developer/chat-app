import { useContext } from "react";
import Register from "./Register";
import { UserContext } from "./UserContext";

export default function Routes() {
  const { username, id } = useContext<any>(UserContext);

  if (username) {
    return "logged in!";
  }

  return <Register />;
}

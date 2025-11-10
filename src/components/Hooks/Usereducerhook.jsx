import React from "react";
import { useUserContext } from "../context/context";

function Usereducerhook() {
  const { users } = useUserContext();

  console.log(users);

  return <div>Use Reducer</div>;
}

export default Usereducerhook;

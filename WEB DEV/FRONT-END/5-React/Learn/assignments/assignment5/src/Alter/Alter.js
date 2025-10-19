import "./Alter.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Alter({ msg = "Message To Show", msgColor = "green", children }) {
  let userData = useContext(UserContext);
  return (
    <div className="alterDiv">
      <h2 style={{ color: msgColor }} className="alterDivText">
        {msg}
        {msgColor === "green" && (
          <h3>Welcome Mes {userData.username}</h3>
        )}
      </h2>
      {children}
    </div>
  );
}

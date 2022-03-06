import { AlarmDiv } from "../styles/CommonStyle";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <Link to="/search">
      <AlarmDiv>
        <img src={require("../images/bell-white.png")} alt="AlarmBell" />
      </AlarmDiv>
    </Link>
  );
}

import { Alarm, HeaderTop, Logo } from "../../styles/HeaderStyle";
import { AiTwotoneBell } from "react-icons/ai";

export default function LogoAlarmHeader() {
  return (
    <HeaderTop>
      <div />
      <Logo>SWEET HOME</Logo>
      <Alarm>
        <AiTwotoneBell size="28" color="#f0b102" />
      </Alarm>
    </HeaderTop>
  );
}

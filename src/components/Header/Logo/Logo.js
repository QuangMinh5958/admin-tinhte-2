import { Link } from "react-router-dom";

import logo from "./logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex justify-center items-center h-[64px]">
        <img className="w-full" src={logo} alt="logo" />
        <div className="flex flex-col -ml-16 leading-[16px]">
          <div className="text-[18px] font-medium">Tinhte.vn</div>
          <div className="text-[12px] tracking-wider">Mạng xã hội</div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;

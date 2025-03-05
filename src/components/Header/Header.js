import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import ButtonLogin from "./ButtonLogin/ButtonLogin";

const Header = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="flex justify-between">
      <Logo />

      {token ? <Menu /> : <ButtonLogin />}
    </div>
  );
};

export default Header;

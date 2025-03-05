import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";

const ListMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  const items: MenuProps["items"] = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: "/admin",
      label: "Admin",
    },
    {
      key: "/dashboard",
      label: "DashBoard",
    },
  ];

  return (
    <Menu
      className="w-[250px] "
      mode="horizontal"
      selectedKeys={location.pathname}
      items={items}
      onClick={handleClick}
    />
  );
};

export default ListMenu;

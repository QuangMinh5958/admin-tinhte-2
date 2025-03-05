import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const Users = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  const itemLogins = [
    {
      label: <Link to="/accout">My Info</Link>,
      key: "0",
    },
    {
      label: <Link to="/setting">Setting</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <span onClick={handleLogout}>Logout</span>,
      key: "3",
    },
  ];

  return (
    <Dropdown
      menu={{
        items: itemLogins,
      }}
      trigger={["click"]}
    >
      <button onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar size="small" icon={<UserOutlined />} />
        </Space>
      </button>
    </Dropdown>
  );
};

export default Users;

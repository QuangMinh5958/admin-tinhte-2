import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

const ListMenuMobile = () => {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/admin">Admin</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/dashboard">Dashboard</Link>,
      key: "2",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <button style={{ marginRight: 18 }} onClick={(e) => e.preventDefault()}>
        <MenuFoldOutlined />
      </button>
    </Dropdown>
  );
};

export default ListMenuMobile;

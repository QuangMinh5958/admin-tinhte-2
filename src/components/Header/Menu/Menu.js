import React from "react";
import { Flex, Grid } from "antd";

import Users from "./Users/Users";
import Mesage from "./Mesage/Mesage";
import ListMenu from "./ListMenu/ListMenu";
import ListMenuMobile from "./ListMenuMobile/ListMenuMobile";

const MenuHeader = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <Flex>
      {screens.md ? <ListMenu /> : <ListMenuMobile />}

      <Flex wrap justify="center" align="center" gap="middle">
        <Mesage />
        <Users />
      </Flex>
    </Flex>
  );
};

export default MenuHeader;

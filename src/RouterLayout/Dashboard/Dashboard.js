import { Col, Divider, Flex, Row } from "antd";
import ContainerLeft from "./ContainerLeft/ContainerLeft";
import ContainerRight from "./ContainerRight";

const Dashboard = () => {
  return (
    <Flex justify="center" style={{ width: "100%" }}>
      <Row gutter={16} style={{ width: "100%" }}>
        <Col xs={24} sm={24} lg={14} xxl={14}>
          <Divider className="px-2">General</Divider>
          <ContainerLeft />
        </Col>
        <Col xs={24} sm={24} lg={10} xxl={10}>
          <Divider className="px-2">Featured list</Divider>
          <ContainerRight />
        </Col>
      </Row>
    </Flex>
  );
};

export default Dashboard;

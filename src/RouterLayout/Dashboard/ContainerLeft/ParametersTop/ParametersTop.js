import { Col, Row, Flex, Card, Statistic } from "antd";
import {
  EyeOutlined,
  LikeOutlined,
  SelectOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

const ParametersTop = () => {
  const style = {
    minWidth: "150px",
    height: "173.8px",
  };

  return (
    <Flex justify="center">
      <Row hozital gutter={[16, 16]} style={{ width: "100%" }}>
        <Col
          className="gutter-row"
          xs={12}
          sm={12}
          md={6}
          lg={12}
          xl={12}
          xxl={6}
        >
          <Card style={style} variant="borderless">
            <span className="flex justify-start pb-2">
              <EyeOutlined style={{ fontSize: "36px", color: "#a79623" }} />
            </span>
            <Statistic
              title="View"
              value={13}
              precision={0}
              valueStyle={{
                color: "#3f8600",
              }}
              suffix="K"
            />
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xs={12}
          sm={12}
          md={6}
          lg={12}
          xl={12}
          xxl={6}
        >
          <Card style={style} variant="borderless">
            <span className="flex justify-start pb-2">
              <ApartmentOutlined
                style={{ fontSize: "36px", color: "#3b76b9" }}
              />
            </span>
            <Statistic
              title="Average reach"
              value={9446}
              precision={0}
              valueStyle={{
                color: "#3f8600",
              }}
            />
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xs={12}
          sm={12}
          md={6}
          lg={12}
          xl={12}
          xxl={6}
        >
          <Card style={style} variant="borderless">
            <span className="flex justify-start pb-2">
              <LikeOutlined style={{ fontSize: "36px", color: "#5a5aff" }} />
            </span>
            <Statistic
              title="Like"
              value={2.06}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              suffix="%"
            />
          </Card>
        </Col>
        <Col
          className="gutter-row"
          xs={12}
          sm={12}
          md={6}
          lg={12}
          xl={12}
          xxl={6}
        >
          <Card style={style} variant="borderless">
            <span className="flex justify-start pb-2">
              <SelectOutlined style={{ fontSize: "36px", color: "#2ea78b" }} />
            </span>
            <Statistic
              title="CTR medium"
              value={1.16}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};

export default ParametersTop;

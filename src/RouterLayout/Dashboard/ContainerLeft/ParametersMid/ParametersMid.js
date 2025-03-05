import { Col, Row } from "antd";
import AverageViews from "./AverageViews/AverageViews";
import AverageReachs from "./AverageReachs/AverageReachs";

const ParametersMid = () => {
  return (
    <div className="mt-4 mx-2">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={24} xl={24} xxl={12}>
          <AverageViews />
        </Col>
        <Col xs={24} sm={24} md={12} lg={24} xl={24} xxl={12}>
          <AverageReachs />
        </Col>
      </Row>
    </div>
  );
};

export default ParametersMid;

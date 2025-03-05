import { Col, Row } from "antd";
import AverageInteraction from "./AverageInteraction/AverageInteraction";
import TotalResponse from "./TotalResponse/TotalResponse";

const ParametersBottom = () => {
  return (
    <div>
      <div className="mt-4 mx-2">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={24} xl={24} xxl={12}>
            <AverageInteraction />
          </Col>
          <Col xs={24} sm={24} md={12} lg={24} xl={24} xxl={12}>
            <TotalResponse />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ParametersBottom;

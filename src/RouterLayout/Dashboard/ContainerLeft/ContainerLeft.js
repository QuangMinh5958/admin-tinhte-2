import ParametersTop from "./ParametersTop";
import ParametersMid from "./ParametersMid/ParametersMid";
import ParametersBottom from "./ParametersBottom/ParametersBottom";

const ContainerLeft = () => {
  return (
    <>
      <ParametersTop />
      <ParametersMid />
      <ParametersBottom />
    </>
  );
};

export default ContainerLeft;

import { Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";

const ButtonLogin = () => {
  const navigate = useNavigate();

  return (
    <Flex className="justify-center items-center">
      <Button
        onClick={() => navigate("/login")}
        type="primary"
        className="text-[16px] px-6 py-5"
      >
        Login
      </Button>
    </Flex>
  );
};

export default ButtonLogin;

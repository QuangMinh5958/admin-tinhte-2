import { Button, Tooltip, Badge } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const Mesage = () => {
  return (
    <Tooltip title="message">
      <Button
        type="text"
        shape="circle"
        icon={
          <Badge count={5} size="small" offset={[3, 2]}>
            <MessageOutlined style={{ fontSize: 16 }} />
          </Badge>
        }
      />
    </Tooltip>
  );
};

export default Mesage;

import React from "react";
import { Layout, Button, Checkbox, Form, Input } from "antd";

import datas from "../../datas";

const Login = () => {
  const { Header, Content } = Layout;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const user = datas.login.find((data) => data.username === values.username);

    if (!user) {
      form.setFields([
        { name: "username", errors: ["Username does not exist!"] },
      ]);
    } else if (user.password !== values.password) {
      form.setFields([{ name: "password", errors: ["Password not correct!"] }]);
    } else {
      localStorage.setItem("token", "token");
      window.location.replace("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout className="w-full flex justify-center items-center">
      <Layout className="flex justify-center items-center p-0 border w-96 mt-10 rounded-md overflow-hidden shadow-xl">
        <Header className="bg-[#c4c8c5] p-0 w-full font-medium text-[28px] text-[#4c77b5]">
          LOGIN
        </Header>
        <Content className="w-full p-8 md:p-0 md:pr-7 md:pt-7">
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              className="w-[268px]"
              name="remember"
              valuePropName="checked"
              label={null}
            >
              <Checkbox className="flex-shrink-0">Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null} className="w-[234px]">
              <Button type="primary" htmlType="submit">
                Enter
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Login;

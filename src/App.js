import "./App.css";
import "antd/dist/reset.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import RouterLayout from "./RouterLayout/RouterLayout";
import HeaderLayout from "./components/Header/Header";
import ProtectRouter from "./components/ProtectRouter/ProtectRouter";
import Login from "./RouterLayout/Login/Login";

function App() {
  const { Header, Content } = Layout;
  return (
    <BrowserRouter>
      <Layout>
        <Header className="sticky top-0 z-[1000] px-5 md:px-12 text-center text-black h-[64px] bg-white border-b border-gray-200 shadow-md">
          <HeaderLayout />
        </Header>

        <Content className="text-center min-h-screen md:mx-[34px] mt-4 mx-1">
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>

          <ProtectRouter>
            <RouterLayout />
          </ProtectRouter>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Admin from "./Admin/Admin";
import Dashboard from "./Dashboard/Dashboard";
import Setting from "./Setting/Setting";
import Home from "./Home/Home";
import Accout from "./Accout/Accout";

const RouterLayout = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Home />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/accout" element={<Accout />} />
    </Routes>
  );
};

export default RouterLayout;

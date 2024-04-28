import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pending } from "./pages/Pending";
import DefaultLayout from "./layouts/DefautLayout";
import AddTask from "./pages/Add";
import TaskModifier from "./pages/Edit";
import TaskAnalytics from "./pages/Analytics";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/edit" element={<TaskModifier />} />
        <Route path="/analystics" element={<TaskAnalytics />} />
      </Route>
    </Routes>
  );
};

export default Router;

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { path } from "./utils/path";
import { About, DetailPost, Home, Layout, Posts } from "./pages/public";
import { Dashboard, EditPost } from "./pages/admin";
import Manager from "./pages/admin/Manager";
import { useState } from "react";
import { List } from "./components";

function App() {
  const [curPage, setCurPage] = useState(1);
  return (
    <>
      <Routes>
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route index path={path.HOME} element={<Home />} />
          <Route
            path={path.POSTS}
            element={<Posts curPage={curPage} setCurPage={setCurPage} />}
          >
            <Route
              path={path.LIST_POST}
              element={<List curPage={curPage} setCurPage={setCurPage} />}
            />
            <Route path={path.DETAIL_POST} element={<DetailPost />} />
          </Route>
          <Route path={path.ABOUT} element={<About />} />
        </Route>
        <Route path={path.SYSTEM} element={<Dashboard />}>
          <Route path={path.MANAGER} element={<Manager />} />
          <Route path={path.CREATE_POST} element={<EditPost />} />
          <Route path={path.UPDATE_POST} element={<EditPost isUpdate />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

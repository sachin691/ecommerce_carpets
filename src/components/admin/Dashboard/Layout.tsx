import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import HomeLayout from "./Layout/HomeLayout";
import { updateTab } from "../../../Redux/Slices/curTabSlice";

const Layout = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Admin"));

  return (
    <div>
      <HomeLayout>
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </HomeLayout>
    </div>
  );
};

export default Layout;

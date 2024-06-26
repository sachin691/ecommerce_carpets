import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaProductHunt } from "react-icons/lia";
import { FaBorderStyle, FaHome } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { removeCookie } from "../../../../utils/cookies";
import { updateLoginStatus } from "../../../../Redux/Slices/loginStatusSlice";
import { updateToLoginStatus } from "../../../../Redux/Slices/toLoginSlice";
import { resetCart } from "../../../../Redux/Slices/CartSlice";
import { resetShippingInfo } from "../../../../Redux/Slices/shippingInfoSlice";
import { SlPeople } from "react-icons/sl";
import { IoCreateOutline } from "react-icons/io5";
import { RiCoupon5Line } from "react-icons/ri";
import UserAvatar from "../../../../globalSubComponents/UserAvatar";

type MyComponentProps = {
  children: any;
};

const HomeLayout = (props: MyComponentProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side") as HTMLCollectionOf<HTMLElement>;
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle") as HTMLCollectionOf<HTMLInputElement>;
    element[0].checked = false;

    changeWidth();
  }

  const handleLogout = () => {
    removeCookie("token");
    removeCookie("username");
    removeCookie("email");
    removeCookie("expiration");
    removeCookie("isAdmin");
    removeCookie("userId");
    dispatch(updateLoginStatus(false));
    dispatch(updateToLoginStatus(true));
    dispatch(resetCart());
    dispatch(resetShippingInfo());
    navigate("/Auth");
  };

  return (
    <>
      <div className="py-[1rem] px-[1.5rem] flex items-center justify-between bg-[#212224]">
        <div className="drawer-content flex items-center gap-[2rem]">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu onClick={changeWidth} size={"32px"} className="font-bold text-white" />
          </label>
          <Link
            to="../"
            className="flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-white hover:text-default-200"
          >
            <div className="flex justify-center items-center gap-[0.4rem]">
              <FaHome />
              <p>Home</p>
            </div>
            <p> {"»"} </p>
            <p> {"Admin Dashboard"} </p>
          </Link>
        </div>
        <UserAvatar />
      </div>
      <div className="min-h-[90vh] ">
        <div className="drawer absolute left-0 z-50 w-fit">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-[100%] bg-slate-600   text-base-content relative text-[1rem] font-bold">
              <li className="w-fit absolute right-2 z-50 text-white">
                <button onClick={hideDrawer}>
                  <AiFillCloseCircle size={24} />
                </button>
              </li>
              <li className="text-white">
                <Link to="/Admin" onClick={hideDrawer}>
                  <span>
                    <LuLayoutDashboard size={20} />
                  </span>
                  Dashboard
                </Link>
              </li>

              <li className="text-white">
                <Link to="/Admin/products" onClick={hideDrawer}>
                  <span>
                    <LiaProductHunt size={20} />
                  </span>
                  All Products
                </Link>
              </li>

              <li className="text-white">
                <Link to="/Admin/addProduct" onClick={hideDrawer}>
                  <span>
                    <IoCreateOutline size={20} />
                  </span>
                  Create Item
                </Link>
              </li>

              <li className="text-white">
                <Link to="/Admin/orders" onClick={hideDrawer}>
                  <span>
                    <FaBorderStyle size={20} />
                  </span>
                  All Orders
                </Link>
              </li>

              <li className="text-white">
                <Link to="/Admin/customers" onClick={hideDrawer}>
                  <span>
                    <SlPeople size={20} />
                  </span>
                  All Customers
                </Link>
              </li>

              <li className="text-white">
                <Link to="/Admin/coupon" onClick={hideDrawer}>
                  <span>
                    <RiCoupon5Line size={20} />
                  </span>
                  Coupons
                </Link>
              </li>

              <li className="absolute bottom-4 w-[90%]  ">
                <Button color="danger" radius="sm" variant="shadow" onClick={handleLogout}>
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {props.children}
      </div>
    </>
  );
};

export default HomeLayout;

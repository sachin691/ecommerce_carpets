// import { Badge, Button } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../adreess/AdreessCard";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
// import { createPayment } from "../../../Redux/Customers/Payment/Action";

const OrderSummary = () => {
    const navigate = useNavigate();
  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);
  // const orderId = searchParams.get("order_id");
  // const dispatch=useDispatch();
  //   const jwt=localStorage.getItem("jwt");
  //   const {order}=useSelector(state=>state)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = queryParams.get("step");

  console.log("stepping", step);

  // console.log("orderId ", order)

  // useEffect(()=>{

  //   dispatch(getOrderById(orderId))
  // },[orderId])

  // const handleCreatePayment=()=>{
  //   const data={orderId:order.order?._id,jwt}
  //   dispatch(createPayment(data))
  // }

  return (
    <div className="space-y-5">
      <div className="p-5 shadow-lg rounded-md border ">
        <AddressCard />
      </div>
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2 ">
          <div className=" space-y-3">
            <CartItem />
          </div>
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price 10 item</span>
                <span>₹999</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹100</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹8999</span>
              </div>
            </div>

            <Button
              onClick={() => navigate("/Checkout?step=3")}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

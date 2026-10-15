import total from "../../utils/getTotalPrice";
import { useSelector, useDispatch } from "react-redux";
import { fetching_cart_items } from "../../store/slices/cartSlice";
function OrderSummary() {
  useDispatch(fetching_cart_items());
  const items = useSelector((state) => state.cartItems.cartItems);
  return (
    <div className="border rounded-xl p-10 m-5">
      <div className=" flex flex-col gap-5">
        <p className="font-bold text-2xl">Order Summary</p>
        <div className="flex justify-between">
          <p className="text-[#000000] opacity-60">Subtotal</p>
          <p className="font-bold text-2xl">${total(items)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#000000] opacity-60">Delivery Fee</p>
          <p className="font-bold text-2xl">$15</p>
        </div>
        <center>
          <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center" />
        </center>
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-bold text-2xl">${15 + total(items)}</p>
        </div>
      </div>
      <div className="m-3 ">
        <div className="flex justify-between m-2 gap-2">
          <input
            type="text"
            placeholder="🏷️ Add promo code"
            className="border rounded-lg bg-[#F0F0F0] w-[69%] p-2 "
          />
          <button className="border w-[30%] rounded-xl bg-[#000000] text-[#FFFFFF] p-2 px-5">
            Apply
          </button>
        </div>
        <center>
          <button className="border rounded-xl bg-[#000000] text-[#FFFFFF] p-3 px-5 w-[90%] m-3">
            Go to Checkout →
          </button>
        </center>
      </div>
    </div>
  );
}

export default OrderSummary;

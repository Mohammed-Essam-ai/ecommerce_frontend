import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { fetching_cart_items } from "../../store/slices/cartSlice";
function CartItems() {
  const { cartItems, loading, error } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetching_cart_items());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <p className="font-bold text-xl ml-5 m-1">YOUR CART</p>

      <div className="border border-lg rounded-xl m-5 mt-0">
        {cartItems.map((item, index) => (
          <div key={item.id}>
            <center>
              <hr className={index !== 0 ? "w-[80%]" : "hidden"} />
            </center>
            <CartItem>{item}</CartItem>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItems;

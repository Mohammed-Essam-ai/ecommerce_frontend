import { useDispatch } from "react-redux";
import {
  deleting_from_cart,
  increasing_one,
  decreasing_one,
} from "../../store/slices/cartSlice";

function ItemQuantity({ cart_item_id, quantity }) {
  const reduxDispatch = useDispatch();

  const handleIncrease = () => {
    reduxDispatch(
      increasing_one({
        cart_item_id: cart_item_id,
      }),
    );
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      reduxDispatch(
        decreasing_one({
          cart_item_id: cart_item_id,
        }),
      );
    }
  };

  const handleDelete = () => {
    reduxDispatch(
      deleting_from_cart({
        cart_item_id: cart_item_id,
      }),
    );
  };

  return (
    <div className="flex flex-col items-center justify-between">
      {/* Delete */}
      <button
        type="button"
        onClick={handleDelete}
        className="text-[#FF3333] mb-2"
      >
        🗑️
      </button>

      <div className="flex bg-[#F0F0F0] rounded-lg gap-10 py-1 px-3 items-center">
        <button
          type="button"
          onClick={handleDecrease}
          disabled={quantity <= 1}
          className="text-xl disabled:opacity-30"
        >
          -
        </button>

        <p>{quantity}</p>
        <button type="button" onClick={handleIncrease} className="text-xl">
          +
        </button>
      </div>
    </div>
  );
}

export default ItemQuantity;

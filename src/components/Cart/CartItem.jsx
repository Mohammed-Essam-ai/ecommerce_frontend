import ItemQuantity from "./ItemQuantity";

import { baseURL } from "../../services/api";

function CartItem(props) {
  const { id, product, quantity } = props.children;
  return (
    <div className="flex p-10">
      <div className="flex gap-2">
        <img
          src={`${baseURL}${product.image}`}
          alt=""
          className="w-[20%] rounded"
        />
        <div className="flex flex-col ">
          <p className="font-bold text-lg">{product.product_name}</p>
          <p className="font-bold text-lg">${product.price}</p>
        </div>
      </div>
      <ItemQuantity cart_item_id={id} quantity={quantity} />
    </div>
  );
}

export default CartItem;

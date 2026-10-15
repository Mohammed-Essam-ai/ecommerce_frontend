import api from "./api";

export const get_cart_items = async () => {
  const response = await api.get("cart/cart-items/", {});
  return response.data;
};

export const add_to_cart = async ({ product_id }) => {
  const response = await api.post(
    "cart/cart-items/",
    {
      data: {
        product_id: product_id,
      },
    },
    {},
  );
  return response.data;
};

export const delete_cart_item = async ({ cart_item_id }) => {
  const response = await api.delete("cart/delete-item/", {
    data: {
      cartitem_id: cart_item_id,
    },
  });

  return response.data;
};

export const increase_one = async ({ cart_item_id }) => {
  const response = await api.patch("cart/increase-one/", {
    cartitem_id: cart_item_id,
  });
  return response.data;
};

export const decrease_one = async ({ cart_item_id }) => {
  const response = await api.patch("cart/decrease-one/", {
    cartitem_id: cart_item_id,
  });

  return response.data;
};

export const get_cart_item_quantity = async ({ cart_item_id }) => {
  const response = await api.get("cart/cart-item-quantity/", {
    params: { cartitem_id: cart_item_id },
  });
  return response.data.quantity;
};

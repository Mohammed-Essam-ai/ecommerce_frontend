import api from "./api";

export const make_order = async (access) => {
  try {
    const response = await api.post(
      "orders/checkout",
      {},
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const confirm_order = async (access, order_id) => {
  try {
    const response = await api.post(
      `orders/${order_id}/confirm`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const cancel_order = async (access, order_id) => {
  try {
    const response = await api.post(
      `orders/${order_id}/cancel`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

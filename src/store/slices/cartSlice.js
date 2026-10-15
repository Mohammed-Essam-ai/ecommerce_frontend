import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  get_cart_items,
  add_to_cart,
  delete_cart_item,
  increase_one,
  decrease_one,
} from "../../services/cartService";

// Fetch cart items
export const fetching_cart_items = createAsyncThunk(
  "cart/fetch_cart_items",

  async () => {
    return get_cart_items();
  },
);

// Add item to cart
export const adding_to_cart = createAsyncThunk(
  "cart/add_to_cart",

  async ({ product_id }, thunkAPI) => {
    await add_to_cart({ product_id });

    return thunkAPI.dispatch(fetching_cart_items()).unwrap();
  },
);

// Delete item from cart
export const deleting_from_cart = createAsyncThunk(
  "cart/delete_from_cart",

  async ({ cart_item_id }, thunkAPI) => {
    await delete_cart_item({ cart_item_id });

    return thunkAPI.dispatch(fetching_cart_items()).unwrap();
  },
);

// Increase quantity
export const increasing_one = createAsyncThunk(
  "cart/increase_one",
  async ({ cart_item_id }, thunkAPI) => {
    console.log(cart_item_id);
    await increase_one({ cart_item_id });
    return thunkAPI.dispatch(fetching_cart_items()).unwrap();
  },
);

// Decrease quantity
export const decreasing_one = createAsyncThunk(
  "cart/decrease_one",

  async ({ cart_item_id }, thunkAPI) => {
    await decrease_one({ cart_item_id });

    return thunkAPI.dispatch(fetching_cart_items()).unwrap();
  },
);

// Cart Items Slice

const cartItemsSlice = createSlice({
  name: "cart-items",

  initialState: {
    cartItems: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetching_cart_items.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetching_cart_items.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })

      .addCase(fetching_cart_items.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch cart items";
      });
  },
});

export default cartItemsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import {
  productsReducer,
  productReducer,
  brandsReducer,
  stylesReducer,
  happyReviewsReducer,
  ReviewsReducer,
} from "./slices/productSlice";
import cartItemsReducer from "./slices/cartSlice";
import {
  accessTokenReducer,
  loginReducer,
  registerReducer,
} from "./slices/userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    login: loginReducer,
    register: registerReducer,
    newAccessToken: accessTokenReducer,
    cartItems: cartItemsReducer,
    brands: brandsReducer,
    styles: stylesReducer,
    happyReviews: happyReviewsReducer,
    reviews: ReviewsReducer,
  },
});

export default store;

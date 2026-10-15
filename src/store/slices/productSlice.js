import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  get_products,
  get_product,
  get_brands,
  get_styles,
  get_happy_reviews,
  get_reviews,
} from "../../services/productService";

// Fetch single product
export const fetch_product = createAsyncThunk(
  "products/fetch_product",
  async (product_id) => {
    return get_product(product_id);
  },
);

// Fetch all products
export const fetch_products = createAsyncThunk(
  "products/fetch_products",
  async (filters) => {
    return get_products(filters);
  },
);
// Fetch all brands
export const fetch_brands = createAsyncThunk("products/brands", async () => {
  return await get_brands();
});

// Fetch all styles
export const fetch_styles = createAsyncThunk("products/styles", async () => {
  console.log("styles from fetch", await get_styles());
  return await get_styles();
});

// fetch happy reviews
export const fetch_happy_reviews = createAsyncThunk(
  "products/happy_reviews",
  async () => {
    return await get_happy_reviews();
  },
);
// fetch reviews for product
export const fetch_reviews = createAsyncThunk(
  "products/reviews",
  async ({ id }) => {
    return await get_reviews({ id: id });
  },
);

// Single Product Slice
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch_product.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetch_product.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetch_product.rejected, (state) => {
        state.loading = false;
        state.error = "failed to fetch product";
      });
  },
});

// Products Slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch_products.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetch_products.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetch_products.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      });
  },
});

// All Brands Slice
const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch_brands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetch_brands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetch_brands.rejected, (state) => {
        state.loading = false;
        state.error = "failed to fetch brands";
      });
  },
});

// All Styles Slice
const stylesSlice = createSlice({
  name: "styles",
  initialState: {
    styles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch_styles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetch_styles.fulfilled, (state, action) => {
        state.loading = false;
        state.styles = action.payload;
      })
      .addCase(fetch_styles.rejected, (state) => {
        state.loading = false;
        state.error = "failed to fetch styles";
      });
  },
});

// Reviews
const ReviewsSlice = createSlice({
  name: "Reviews",
  initialState: {
    reviews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch_reviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetch_reviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetch_reviews.rejected, (state) => {
        state.loading = false;
        state.error = "failed to fetch reviews";
      });
  },
});

// Happy Reviews
const happyReviewsSlice = createSlice({
  name: "happyReviews",
  initialState: {
    reviews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch_happy_reviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetch_happy_reviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetch_happy_reviews.rejected, (state) => {
        state.loading = false;
        state.error = "failed to happy reviews";
      });
  },
});

export const ReviewsReducer = ReviewsSlice.reducer;
export const happyReviewsReducer = happyReviewsSlice.reducer;
export const stylesReducer = stylesSlice.reducer;
export const brandsReducer = brandsSlice.reducer;
export const productReducer = productSlice.reducer;
export const productsReducer = productsSlice.reducer;

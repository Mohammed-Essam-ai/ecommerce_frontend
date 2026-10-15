import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useReducer } from "react";
import { fetch_product } from "../store/slices/productSlice";
import { useParams } from "react-router-dom";
import { baseURL } from "../services/api";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Product/Reviews";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetails, productDetailsDispatch] = useReducer(
    reducer,
    "Rating&Reviews",
  );
  const { product, loading, error } = useSelector((state) => state.product);

  const [selectedColor, setSelectedColor] = useState(null);
  const [size, setSize] = useState("");

  useEffect(() => {
    dispatch(fetch_product(id));
  }, [dispatch, id]);

  // Prevent undefined errors while data is loading
  const colors = product?.colors ?? [];
  const sizes = product?.sizes ?? [];

  // First color is selected automatically
  const currentColor = selectedColor ?? colors[0];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  function reducer(state, action) {
    if (action.type == "Product Details") {
      return "Product Details";
    } else if (action.type == "FAQs") {
      return "FAQs";
    } else {
      return "Rating&Reviews";
    }
  }
  function render(productDetails) {
    if (productDetails == "Product Details") {
      return (
        <div>
          <p>{product.content}</p>
        </div>
      );
    } else if (productDetails == "FAQs") {
      return "faqs";
    } else {
      return <Reviews id={id} />;
    }
  }
  return (
    <div>
      <Announcement />
      <Navbar />
      <br />
      {/* body */}
      <div className="md:flex">
        {/* Product Images */}
        <div className="flex flex-col md:flex-row-reverse md:gap-2 md:max-w-[45%] ">
          <div className="">
            {currentColor?.images?.[0]?.image && (
              <img
                src={`${baseURL}/${currentColor.images[0].image}`}
                className="md:h-[100%]"
              />
            )}
          </div>
          <div className="flex md:flex-col md:gap-0 ">
            {currentColor?.images.map((image_object, index) => (
              <div key={image_object.id} className=" md:p-0  md:m-0">
                <img
                  src={`${baseURL}/${image_object?.image}`}
                  alt=""
                  className={`rounded-2xl m-2 md:h-[120px] md:w-[140px] p-2 md:p-1  md:m-1  ${index == 0 ? "hidden" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="md:m-5 md:flex md:flex-col md:gap-2 md:w-[50%]">
          <div>
            <p className="font-bold text-xl">{product?.product_name}</p>

            <p className="font-bold text-xl">${product?.price}</p>

            <p className="text-sm text-[#000000] opacity-60">
              {product?.content}
            </p>
          </div>

          <center>
            <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center m-3" />
          </center>

          {/* Colors */}
          <div>
            <p className="text-[#000000] opacity-60">Select Colors</p>

            <div className="m-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`m-1 rounded-full p-2 border ${
                    currentColor?.name === color.name ? "ring-2 ring-black" : ""
                  }`}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <center>
            <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center m-3" />
          </center>

          {/* Sizes */}
          <div>
            <p className="text-[#000000] opacity-60">Select Size</p>

            <div className="m-3">
              {sizes.map((product_size) => (
                <button
                  key={product_size.name}
                  onClick={() => setSize(product_size.name)}
                  className={`m-1 rounded-2xl p-2 px-4 ${
                    size === product_size.name
                      ? "bg-[#000000] text-[#FFFFFF]"
                      : "bg-[#F0F0F0]"
                  }`}
                >
                  <div className="flex justify-between">
                    <p>{product_size.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <center>
            <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center m-3" />
          </center>
        </div>
      </div>
      <center>
        <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center m-3" />
      </center>
      <div className="flex justify-between p-1 m-1 text-[#000000] opacity-60 ">
        <button
          onClick={() => productDetailsDispatch({ type: "Product Details" })}
          className={`${productDetails == "Product Details" ? "text-black" : ""}`}
        >
          Product Details
        </button>

        <button
          onClick={() => productDetailsDispatch({ type: "Rating&Reviews" })}
          className={`${productDetails == "Rating&Reviews" ? "text-[#000000] opacity-100 font:semibold" : ""}`}
        >
          Rating&Reviews
        </button>

        <button
          onClick={() => productDetailsDispatch({ type: "FAQs" })}
          className={`${productDetails == "FAQs" ? "text-black" : ""}`}
        >
          FAQs
        </button>
      </div>
      {render(productDetails)}
      <Footer />
    </div>
  );
}

export default Product;

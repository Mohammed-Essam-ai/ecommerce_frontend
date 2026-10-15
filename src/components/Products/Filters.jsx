import SizeFilter from "./filters/SizeFilter";
import PriceFilter from "./filters/PriceFilter";
import CategoryFilter from "./filters/CategoryFilter";
import ColorFilter from "./filters/ColorFilter";
import StyleFilter from "./filters/StyleFilter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetch_products } from "../../store/slices/productSlice";
function Filters() {
  const [params, setParams] = useState({
    color: null,
    category: null,
    min_price: 0,
    max_price: 9999999999,
    size: null,
    style: null,
  });
  const dispatch = useDispatch();
  function handle_params(params) {
    const result = {};
    for (const key in params) {
      if (params[key] !== null) {
        result[key] = params[key];
      }
    }
    return result;
  }
  return (
    <div className="border rounded-lg md:max-w-[25%] m-2 ml-5 my-3 p-2">
      <aside>
        <p className="text-xl font-semibold">Filters</p>
        <CategoryFilter params={params} setParams={setParams} />
        <center>
          <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center m-5" />
        </center>
        <p className="text-xl font-semibold">Price</p>
        <PriceFilter params={params} setParams={setParams} />
        <center>
          <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center m-5" />
        </center>
        <p className="text-xl font-semibold">Colors</p>
        <ColorFilter params={params} setParams={setParams} />
        <center>
          <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center m-5" />
        </center>
        <p className="text-xl font-semibold">Sizes</p>
        <SizeFilter params={params} setParams={setParams} />
        <center>
          <hr className="w-[90%] text-[#D9D9D9] flex justify-center items-center m-5" />
        </center>
        <p className="text-xl font-semibold">Dress Style</p>
        <StyleFilter params={params} setParams={setParams} />
        <center>
          <button
            className="bg-[#000000] text-[#FFFFFF] rounded-xl w-[90%] m-2 p-2 px-4 m-5"
            onClick={() => {
              dispatch(fetch_products(handle_params()));
            }}
          >
            Apply Form
          </button>
        </center>
      </aside>
    </div>
  );
}

export default Filters;

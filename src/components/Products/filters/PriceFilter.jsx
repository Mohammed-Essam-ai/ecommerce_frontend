import { useState } from "react";

function PriceFilter({ params, setParams }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  return (
    <div className="m-2">
      <div className="my-3">
        <p className="font-semibold">Minimum Price:</p>
        <input
          type="range"
          min="0"
          max="1000"
          className="w-[90%]  accent-[#000000]"
          onChange={(e) => {
            setMin(e.target.value);

            setParams({
              ...params,
              min_price: e.target.value,
            });
          }}
        />
        <p>${min}</p>
      </div>

      <div className="my-3">
        <p className="font-semibold">Max Price:</p>
        <input
          type="range"
          min="0"
          max="10000"
          className="w-[90%]  accent-[#000000]"
          onChange={(e) => {
            setMax(e.target.value);

            setParams({
              ...params,
              max_price: e.target.value,
            });
          }}
        />
        <p>${max}</p>
      </div>
    </div>
  );
}

export default PriceFilter;

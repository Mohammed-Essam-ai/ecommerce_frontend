import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_brands } from "../../store/slices/productSlice";
import { Link } from "react-router-dom";
function BrandSelection() {
  const dispatch = useDispatch();
  const { brands, loading, error } = useSelector((state) => state.brands);
  useEffect(() => {
    dispatch(fetch_brands());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className=" h-[146px] bg-[#000000] text-[#FFFFFF] flex flex-wrap gap-10 md:gap-15 justify-center text-4xl md:p-10 items-center  md:h-[122px]">
      {brands.map((brand) => (
        <Link>
          <div key={brand.id}>
            <p>{brand.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BrandSelection;

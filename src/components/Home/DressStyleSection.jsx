import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_styles } from "../../store/slices/productSlice";
import { baseURL } from "../../services/api";
import { Link } from "react-router-dom";
function DressStyleSection() {
  const dispatch = useDispatch();
  const { styles, loading, error } = useSelector((state) => state.styles);
  useEffect(() => {
    dispatch(fetch_styles());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log("styles from component", styles);
  return (
    <div className="bg-[#F0F0F0] mx-4 sm:mx-8 md:mx-12 lg:mx-20 p-5 sm:p-7 md:p-10 rounded-4xl">
      <h2 className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-8">
        {styles.map((style, index) => (
          <div
            key={style.id}
            className={`
          relative h-48 sm:h-56 md:h-64 lg:h-72
          overflow-hidden rounded-lg
          ${index % 2 === 0 ? "md:col-span-5" : "md:col-span-7"}
        `}
          >
            <Link>
              <p className="absolute top-4 left-4 z-10 font-bold text-lg sm:text-xl">
                {style.name}
              </p>

              <img
                src={`${baseURL}${style.image}`}
                alt={style.name}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DressStyleSection;

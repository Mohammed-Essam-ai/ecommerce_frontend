import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_products } from "../../store/slices/productSlice";
import { Link } from "react-router-dom";
function NewProducts() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetch_products({ ordering: "date" }));
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log(products);
  return (
    <div className="m-10">
      <center>
        <p className="font-extrabold text-4xl">NEW ARRIVALS</p>
      </center>
      <div className="flex gap-5  my-10 ">
        {products.map((product) => (
          <Link to={`products/product/${product.id}`}>
            <div key={product.id} className="font-bold text-lg">
              <img
                src={product.image}
                className="w-[198px] h-[200.01px] md:w-[295px] md:h-[298px] rounded rounded-2xl"
              />
              <center></center>
              {product.product_name}
              <br />${product.price}
            </div>
          </Link>
        ))}
      </div>
      <center>
        <div className="border max-w-full w-[358px] md:w-[400px] h-[46px] md:w-[218px] rounded-2xl md:h-[52px] flex justify-center items-center">
          <button className="text-lg  max-w-full">
            <center>View All</center>
          </button>
        </div>
      </center>
    </div>
  );
}

export default NewProducts;

import { useSelector } from "react-redux";
function InnerProducts() {
  const { products, loading, error } = useSelector((state) => state.products);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex gap-5  my-10 ">
      {products.map((product) => (
        <div key={product.id} className="font-bold text-lg">
          <img
            src={product.image}
            className="w-[198px] h-[200.01px] md:w-[295px] md:h-[298px] rounded rounded-2xl"
          />
          <center></center>
          {product.product_name}
          <br />${product.price}
        </div>
      ))}
    </div>
  );
}

export default InnerProducts;

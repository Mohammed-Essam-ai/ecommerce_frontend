function CategoryFilter({ params, setParams }) {
  const categories = ["T-Shirt", "Short", "Jeans", "Hoodie", "Shirts"];
  return (
    <div className="m-3">
      {categories.map((category) => (
        <button
          onClick={() => setParams({ ...params, category: category })}
          className={`w-full m-1 ${params.category == category ? "bg-[#F0F0F0] p-1 rounded" : ""}`}
        >
          {console.log(params)}
          <div className={`flex justify-between `}>
            <p>{category}</p>
            <p> {">"}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

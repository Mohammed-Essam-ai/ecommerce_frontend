function SizeFilter({ params, setParams }) {
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  return (
    <div className="m-3">
      {sizes.map((size) => (
        <button
          onClick={() => setParams({ ...params, size: size })}
          className={` m-1 rounded-2xl p-2 px-4 ${params.size == size ? "bg-[#000000] text-[#FFFFFF]" : "bg-[#F0F0F0] "}`}
        >
          <div className="flex justify-between">
            <p>{size}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;

function ColorFilter({ params, setParams }) {
  const colors = [
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-400",
    "bg-orange-500",
    "bg-blue-500",
    "bg-purple-600",
    "bg-pink-500",
    "bg-white",
    "bg-black",
  ];
  const color_sends = [
    "green",
    "red",
    "yellow",
    "orange",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];

  return (
    <div className="m-2">
      {colors.map((color_t, index) => (
        <button
          className={`relative ${color_t} border border-[#00000080] m-1  w-10  h-10 border-[2px] rounded-4xl`}
          onClick={() => setParams({ ...params, color: color_sends[index] })}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center font-semibold  ${color_t == "bg-white" ? "text-black" : "text-white"}`}
          >
            {params.color == color_sends[index] ? "✓" : ""}
          </div>
        </button>
      ))}
    </div>
  );
}

export default ColorFilter;

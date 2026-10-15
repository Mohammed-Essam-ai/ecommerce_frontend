function StyleFilter({ params, setParams }) {
  const styles = ["Casual", "Formal", "Party", "Gym"];
  return (
    <div className="m-3">
      {styles.map((style) => (
        <button
          onClick={() => setParams({ ...params, style: style })}
          className={`w-full m-1 ${params.style == style ? "bg-[#F0F0F0] p-1 rounded" : ""}`}
        >
          {console.log(params)}
          <div className="flex justify-between">
            <p>{style}</p>
            <p> {">"}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default StyleFilter;

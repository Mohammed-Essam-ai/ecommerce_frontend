function RegisterAuth() {
  return (
    <div
      className="hidden md:flex flex-col w-1/2 min-h-screen justify-between text-white m-0  self-stretch"
      id="auth"
    >
      <div className=" p-10 ">
        <p className="m-2 border bg-[#262626] border-white p-1 px-6  text-white w-fit rounded-xl m-2">
          Join in under a minute
        </p>
        <p className="font-bold text-4xl m-2 ">
          EVERY THING YOU WANT IN ONE PLACE
        </p>
        <p className="text-[#b8b8b8] m-2">
          Create an account to save products, follow price drops, and speed
          through checkout.
        </p>
      </div>

      <div>
        <div className="flex  flex-wrap  pl-5">
          <p className="bg-black text-lg opacity-70 rounded-xl border py-1 px-5 border-white m-3">
            T-Shirt
          </p>
          <p className="bg-black text-lg opacity-70 rounded-xl border py-1 px-5 border-white m-3">
            Short
          </p>
          <p className="bg-black text-lg opacity-70 rounded-xl border py-1 px-5 border-white m-3">
            Jeans
          </p>
          <p className="bg-black text-lg opacity-70 rounded-xl border py-1 px-5 border-white m-3">
            Hoodie
          </p>
          <p className="bg-black text-lg opacity-70 rounded-xl border py-1 px-5 border-white m-3">
            Shirts
          </p>
        </div>
        <div className="flex  justify-between flex-wrap p-5">
          <div>
            <p className="font-bold text-2xl">13</p>
            <p className="text-[#b8b8b8]">Categories</p>
          </div>
          <div>
            <p className="font-bold text-2xl">2.4k+</p>
            <p className="text-[#b8b8b8]">Products Listed</p>
          </div>
          <div>
            <p className="font-bold text-2xl">24/7</p>
            <p className="text-[#b8b8b8]">Order Tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAuth;

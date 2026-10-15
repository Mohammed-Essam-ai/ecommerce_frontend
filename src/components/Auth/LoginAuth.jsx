function LoginAuth() {
  return (
    <div
      className="hidden md:flex flex-col w-1/2 min-h-screen justify-between text-white m-0  self-stretch"
      id="auth"
    >
      <div className=" p-7">
        <p className="m-2 border bg-[#262626] border-white p-1 px-6  text-white w-fit rounded-xl">
          Welcome back
        </p>
        <p className="font-bold text-4xl ">Pick up right where you left off.</p>
        <p className="text-[#b8b8b8]">
          Sign in to track your orders, manage your saved lists, and check out
          faster next time.
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

export default LoginAuth;

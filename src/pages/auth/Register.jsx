import RegisterAuth from "../../components/Auth/RegisterAuth";
function Register() {
  return (
    <div className="flex min-h-screen">
      <RegisterAuth />
      <div className="flex flex-col justify-center md:p-12 p-3 gap-6">
        <p className="font-bold text-2xl">SHOP.CO</p>
        <div>
          <p className="font-bold text-3xl tracking-wider">
            CREATE YOUR ACCOUNT
          </p>
          <p className="text-[#6c6c6c]">
            Already shopping with us?{" "}
            <a href="" className="text-black">
              Sign in instead.
            </a>
          </p>
        </div>
        <div className="flex flex-wrap">
          <div>
            <p>First name</p>
            <input
              type="text"
              className="border mr-10 rounded-lg h-10 pl-5"
              placeholder="Mark"
            />
          </div>
          <div>
            <p>Last name</p>
            <input
              type="text"
              className="border rounded-lg h-10 w-full pl-5"
              placeholder="Opama"
            />
          </div>
        </div>
        <div>
          <p>Email address</p>
          <input
            type="email"
            className="border rounded-lg h-10 w-full pl-5"
            placeholder="you@gmail.com"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            className="border rounded-lg h-10 w-full pl-5"
            placeholder="At least 8 characters"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            type="password"
            className="border rounded-lg h-10 w-full pl-5"
            placeholder="Re-enter your password"
          />
        </div>
        <div>
          <input type="checkbox" className="inline w-10" />
          <p className="inline">
            I agree to the <a href=""> Terms</a> and{" "}
            <a href="">Privacy Policy</a>
          </p>
        </div>
        <button
          type="submit"
          className="bg-black text-white w-full rounded-3xl p-2 h-12"
        >
          Create account
        </button>

        <div className="flex items-center gap-2">
          <hr className="flex-1" />
          <p className="whitespace-nowrap">or sign up with</p>
          <hr className="flex-1" />
        </div>

        <button className="rounded-lg border w-[60%] self-center p-1">
          Google
        </button>
      </div>
    </div>
  );
}

export default Register;

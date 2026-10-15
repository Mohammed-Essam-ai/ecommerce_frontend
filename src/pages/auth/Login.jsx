import LoginAuth from "../../components/Auth/LoginAuth";

function Login() {
  return (
    <div className="flex min-h-screen w-full">
      <LoginAuth />

      <div className="flex w-full md:w-1/2 flex-col justify-center items-center px-5  md:pt-0 md:m-0 md:px-10">
        <div className="w-full max-w-md p-5 md:p-10  pb-5 md:py-1">
          <p className="font-extrabold text-2xl tracking-wider">SHOP.CO</p>

          <p className="font-extrabold text-2xl tracking-wider">
            Sign in to your account
          </p>

          <p className="text-[#6c6c6c]">
            New here?{" "}
            <a href="/user/register" className="text-black">
              Create an account
            </a>{" "}
            to start shopping.
          </p>
        </div>

        <div className="flex w-full max-w-md flex-col gap-3 px-5 md:px-10">
          <div className="w-full">
            <p>Username</p>
            <input type="text" className="border rounded-lg w-full h-8" />
          </div>

          <div className="w-full">
            <p>Password</p>
            <input type="password" className="border rounded-lg w-full h-8" />
          </div>

          <div>
            <input type="checkbox" />
            <p className="inline ml-1">Remember me</p>
          </div>

          <button
            type="submit"
            className="bg-black text-white w-full rounded-lg p-2"
          >
            Sign in
          </button>

          <div className="flex items-center gap-2">
            <hr className="flex-1" />
            <p className="whitespace-nowrap">or continue with</p>
            <hr className="flex-1" />
          </div>

          <button className="rounded-lg border w-[60%] self-center p-1">
            Google
          </button>

          <p className="text-[#656565]">
            By continuing you agree to our{" "}
            <a href="" className="text-black">
              Terms
            </a>{" "}
            and{" "}
            <a href="" className="text-black">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

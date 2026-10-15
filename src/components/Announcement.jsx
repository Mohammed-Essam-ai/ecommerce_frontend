import { useState } from "react";
function Announcement() {
  const [show, setShow] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <div className="bg-[#000000] font-thin p-1 text-[#FFFFFF] md:h-[38px]  h-[34px] flex flex-row justify-around">
      <p>
        Sign up and get 20% off to your first order.
        <a className="ml-3 underline font-normal ">Sign Up Now</a>
      </p>
      <button className="hover:font-medium" onClick={() => setShow(false)}>
        X
      </button>
    </div>
  );
}

export default Announcement;

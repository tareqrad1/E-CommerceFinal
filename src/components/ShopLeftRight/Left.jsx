import { useState } from "react";

const Left = () => {
  const [hide, setHide] = useState(false);
  console.log(hide);
  return (
    <>
      <div className="left hidden md:block md:w-[30%] px-1 py-4 space-y-3">
        <div className="">
          <h3 className="text-[20px] font-semibold">Shop by Category</h3>
          <ul className="space-y-2 px-1 py-2 cursor-pointer">
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              New Arrivals
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Gudgets
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Accessories
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Electronics
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Others
            </li>
          </ul>
        </div>
        <div>
          <div
            className="flex justify-between items-center"
            onClick={() => (!hide ? setHide(true) : setHide(false))}
          >
            <h3 className="text-[20px] font-semibold mb-4">Shop by Color</h3>
            <i
              className={` ${
                hide ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down "
              } cursor-pointer`}
            ></i>
          </div>
          <ul className={`${hide ? "hidden" : "block"} transition-colors`}>
            <li className="text-[#767676]">
              <span className="bg-green-800 w-[10px] h-[10px] rounded-full inline-block mr-2"></span>
              Green
            </li>
            <li className="text-[#767676]">
              <span className="bg-gray-700 w-[10px] h-[10px] rounded-full inline-block mr-2"></span>
              Gray
            </li>
            <li className="text-[#767676]">
              <span className="bg-red-800 w-[10px] h-[10px] rounded-full inline-block mr-2"></span>
              Red
            </li>
            <li className="text-[#767676]">
              <span className="bg-yellow-800 w-[10px] h-[10px] rounded-full inline-block mr-2"></span>
              Yellow
            </li>
            <li className="text-[#767676]">
              <span className="bg-blue-800 w-[10px] h-[10px] rounded-full inline-block mr-2"></span>
              Blue
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[20px] font-semibold">Shop by Brand</h3>
          <ul className="space-y-2 px-1 py-2 cursor-pointer">
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Apple
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Ultron
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Unknown
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Shoppers Home
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              Hoichoi
            </li>
          </ul>
        </div>
        <div>
          <div
            className="flex justify-between items-center mb-3"
            onClick={() => (!hide ? setHide(true) : setHide(false))}
          >
            <h3 className="text-[20px] font-semibold">Shop by Price</h3>
            <i
              className={` ${
                hide ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"
              } cursor-pointer`}
            ></i>
          </div>
          <ul
            className={`${
              hide ? "hidden" : "block"
            } space-y-2 px-1 py-2 transition-colors`}
          >
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              $0.00 - $49.99
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              $50.00 - $99.99
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              $100.00 - $199.99
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676] hover:text-black hover:border-black transition-[1s]">
              $200.00 - $399.99
            </li>
            <li className="border-b-[1px] border-[#ccc] py-1 text-[#767676]">
              $400.00 - $599.99
            </li>
            <li className="py-1 text-[#767676]">$600.00 - $1000.00</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Left;

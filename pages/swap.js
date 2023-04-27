import React from "react";
import Image from "next/image";

const swap = () => {
  return (
    <div className="bg-[#001312] h-[400px]">
      <div className="w-[85%] mx-auto flex justify-between">
        <div className="left mt-10 w-[318px] border h-[306.87px] bg-[rgba(181, 151, 112, 1)] rounded">
          <div className="cardHeader pt-2 flex items-center justify-start w-[88%] mx-auto">
            <h1 className="font-bold text-white text-2xl">HPAY</h1>
            <div className="bg-white h-5 mx-4 w-[0.5px]"></div>
            <h1 className="font-semibold text-white text-xl">Exchange</h1>
          </div>
          <div className="cardDetails">
            <button className="flex justify-between pl-4 pr-4 items-center border w-[275px] h-[45px] mb-4 mt-6 mx-auto">
              <div className="flex items-center">
                <Image
                  src="/cardSwap.png"
                  alt="Language line image"
                  width={20}
                  height={20}
                />
                <span className="text-white ml-2">Buy HedgePay</span>
              </div>
              <Image
                src="/arrowRight.png"
                alt="Language line image"
                width={7}
                height={7}
              />
            </button>
            <button className="flex justify-between pl-4 pr-4 items-center border w-[275px] h-[45px] mb-2 mx-auto">
              <div className="flex items-center">
                <Image
                  src="/Share.png"
                  alt="Language line image"
                  width={20}
                  height={20}
                />
                <span className="text-white ml-2">Transfer GateAway</span>
              </div>
              <Image
                src="/arrowRightWhite.png"
                alt="Language line image"
                width={7}
                height={7}
              />
            </button>
            <button className="flex justify-between pl-4 pr-4 items-center border w-[275px] h-[45px] mb-2 mx-auto">
              <div className="flex items-center">
                <Image
                  src="/PresentationChart.png"
                  alt="Language line image"
                  width={20}
                  height={20}
                />
                <span className="text-white ml-2">View Chart</span>
              </div>
              <Image
                src="/arrowRightWhite.png"
                alt="Language line image"
                width={7}
                height={7}
              />
            </button>
            <button className="flex justify-between pl-4 pr-4 items-center border w-[275px] h-[45px] mb-2 mx-auto">
              <div className="flex items-center">
                <Image
                  src="/Frame.png"
                  alt="Language line image"
                  width={20}
                  height={20}
                />
                <span className="text-white ml-2">Buy with Transak</span>
              </div>
              <Image
                src="/arrowRightWhite.png"
                alt="Language line image"
                width={7}
                height={7}
              />
            </button>
          </div>
        </div>
        <div className="center mt-10 w-[419.81px] h-[378.68px]">
          <h1 className="centerHeader text-[35px] text-white semibold">
            Aggregator DEX
          </h1>
          <p className="text-gray-300 my-8 w-[399.81px]">
            HedgePay’s Aggregator DEX has the ability to track the best prices
            for the token you want on established Decentralized Exchanges. The
            HedgePay DEX will also provides you with the option to set limit
            orders, giving you the freedom hunt for the token you want at the
            price you want it
          </p>
          <div className="flex justify-start mt-5 items-center">
            <button className="w-[155px] h-[45px] mr-6 text-white rounded p-[9px, 25px] bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700">
              Buy HedgePay
            </button>
            <button className="w-[155px] h-[45px] text-white rounded p-[9px, 25px] border ">
              View Chart
            </button>
          </div>
        </div>
        <div className="right w-[30%]"></div>
      </div>
    </div>
  );
};

export default swap;

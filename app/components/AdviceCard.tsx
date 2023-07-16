"use client";

import Image from "next/image";
import dice from "@/public/icon-dice.svg";
import mobileDivider from "@/public/pattern-divider-mobile.svg";
import desktopDivider from "@/public/pattern-divider-desktop.svg";
import getAdvice from "../api/getAdvice";
import { useEffect, useState } from "react";

const AdviceCard = () => {
  const [data, setData] = useState({ slip: { id: 0, advice: "Fetching..." } });

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    const newData = await getAdvice();
    setData(newData);
  };

  return (
    <div className="desktop:mt-[20%]">
      <section className="relative flex flex-col min-h-[20%] mt-16  desktop:max-w-[440px] mx-5 desktop:mx-auto px-8 py-4 rounded-xl justify-center items-center  bg-darkGrayishBlue">
        <div>
          <p className="mt-6 text-sm text-neonGreen tracking-[0.3em]">
            ADVICE # {data?.slip.id}
          </p>
        </div>
        <div className="mt-6 text-[28px] text-lightCyan text-center">
          &#8220;{data?.slip.advice}&#8221;
        </div>
        <div className="h-16 mt-8 mb-2">
          <Image
            priority
            className="desktop:hidden"
            src={mobileDivider}
            alt="Divider Image"
          />
          <Image
            priority
            className="hidden desktop:block"
            src={desktopDivider}
            alt="Divider Image"
          />
        </div>
        <div className="absolute top-[calc(100%-2rem)] p-0 ">
          <button
            onClick={handleSubmit}
            className="flex justify-center items-center bg-neonGreen  hover:shadow-round hover:shadow-neonGreen rounded-full w-16 h-16"
          >
            <Image className="z-20" src={dice} alt="Dice Image" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdviceCard;

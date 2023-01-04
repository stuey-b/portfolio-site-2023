import React from "react";
import Image from "next/image";

type Props = {};

const Certs = (props: Props) => {
  return (
    <section className="px-14 flex flex-col justify-center bg-red-100 h-screen">
      <div className=" flex flex-col justify-center h-2/3 gap-4">
        <h2 className="text-4xl font-black text-slate-900">
          Certs<span className="text-pink-500">.</span>
        </h2>
        <div className=" flex flex-col justify-center">
          <div className="flex flex-col items-start">
            <h3>The Complete 2023 Web Development Bootcamp</h3>
            <a href="">
              <Image
                src="/angela-web-dev.jpeg"
                alt=""
                height={10}
                width={250}
              />
            </a>
            <button className="w-28 h-10 rounded border-2 font-semibold border-slate-800">
              Certificate
            </button>
          </div>
          <div className="flex flex-col items-start">
            <h3>100 Days of Code: The Complete Python Pro Bootcamp for 2023</h3>
            <a href="">
              <Image src="/angela-python.jpeg" alt="" height={10} width={250} />
            </a>
            <button className="w-28 h-10 rounded border-2 font-semibold border-slate-800">
              Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certs;

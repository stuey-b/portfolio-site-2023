import React from "react";
import Image from "next/image";

type Props = {};

const Certs = (props: Props) => {
  return (
    <section id="certs" className="bg-red-100">
      <div className="InnerSection">
        <h2>Certs<span>.</span></h2>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-start gap-y-4">
            <h3 className="text-lg font-bold">The Complete 2022 Web Development Bootcamp</h3>
            <a href="">
              <Image
                src="/angela-web-dev.jpeg"
                alt=""
                height={10}
                width={250}
              />
            </a>
            <button>
              Certificate
            </button>
            <div className="flex flex-col items-start gap-y-4">
            <h3 className="text-lg font-bold">100 Days of Code: The Complete Python Pro Bootcamp for 2022</h3>
            <a href="">
              <Image src="/angela-python.jpeg" alt="" height={10} width={250} />
            </a>
            <button>
              Certificate
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Certs;

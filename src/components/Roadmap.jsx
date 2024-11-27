import { asserts } from "../assets/assets";

const Roadmap = () => {
  return (
    <div className="relative h-screen">
      <img src={asserts.aboutBg} alt="" className="z-2 h-screen w-full" />

      <div className="absolute top-[16%] md::top-[43%] lg:left-32 lg:right-32 z-8">
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-ultraBold text-white font-extrabold">
            Our <span className="text-gold">Features</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
          <div className="bg-gray-700 bg-opacity-30 flex flex-col items-start w-full lg:w-3/12 h-[300px] rounded-lg py-6 px-6 hover:scale-y-110">
            <div className="bg-gray-700 bg-opacity-45 rounded-full size-12 flex justify-center shadow-md mb-4">
              <img src={asserts.dollar} alt="Dollar" className="w-8" />
            </div>
            <p className="text-base md:text-xl text-white font-medium my-3">
              Cheapest TXs
            </p>
            <p className="text-xs md:text-base text-gray-400">
              Exchange popular digital currencies at the cheapest possible
              transaction price
            </p>
          </div>
          <div className="bg-gray-700 bg-opacity-30 flex flex-col items-start w-full lg:w-3/12 h-[300px] rounded-lg py-6 px-6 hover:scale-y-110">
            <div className="bg-gray-700 bg-opacity-45 rounded-full size-12 flex justify-center shadow-md mb-4">
              <img src={asserts.shield} alt="SHield" className="w-8" />
            </div>
            <p className="text-base md:text-xl text-white font-medium my-3">
              CerTIK
            </p>
            <p className="text-xs md:text-base text-gray-400">
              We are Audited by Certik. CertiK is the leading security-focused
              ranking platform to
            </p>
          </div>
          <div className="bg-gray-700 bg-opacity-30 flex flex-col items-start w-full lg:w-3/12 h-[300px] rounded-lg py-6 px-6 hover:scale-y-110">
            <div className="bg-gray-700 bg-opacity-45 rounded-full size-12 flex justify-center shadow-md mb-4">
              <img src={asserts.phone} alt="phone" className="w-8" />
            </div>
            <p className="text-base md:text-xl text-white font-medium my-3 ">
              No Contract Sells
            </p>
            <p className="text-xs md:text-base text-gray-400">
              No contract sells to fund the marketing wallets
            </p>
          </div>
          <div className="bg-gray-700 bg-opacity-30 flex flex-col items-start w-full lg:w-3/12 h-[300px] rounded-lg py-6 px-6 hover:scale-y-110">
            <div className="bg-gray-700 bg-opacity-45 rounded-full size-12 flex justify-center shadow-md mb-4">
              <img src={asserts.options} alt="Dollar" className="w-8" />
            </div>
            <p className="text-base md:text-xl text-white font-medium my-3">
              CrossDex Support
            </p>
            <p className="text-xs md:text-base text-gray-400">
              Exchange popular digital currencies at the cheapest possible
              transaction price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

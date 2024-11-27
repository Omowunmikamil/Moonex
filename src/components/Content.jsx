const Content = () => {
  return (
    <div className="">
      <div className="absolute top-[32%] md::top-[43%] lg:left-20 z-8 lg:w-4/5 pl-4 md:pl-10 lg:pl-12">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-ultraBold text-white font-extrabold">
          Trusted Multi-Chain <br />
          <span className="text-yellow">DEX</span> Platform
        </h1>
        <p className="text-gray-400 text-xs sm:text-base font-neueRegular mt-2">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 mt-6 md:mt-10">
          <button className="bg-gradient-to-r from-yellow1 to-gold text-btnText text-xs md:text-sm font-bold py-2 px-6 rounded-full border border-transparent content">
            Connect Wallet
          </button>
          <button className="bg-gradient-to-r from-yellow1 to-gold text-btnText text-xs md:text-sm font-bold py-2 px-6 rounded-full border border-transparent content">
            Trade Crypto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;

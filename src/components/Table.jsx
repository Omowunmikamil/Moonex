import { asserts } from "../assets/assets";

const Table = () => {
  return (
    <div>
      <div className="absolute top-[16%] md::top-[43%] lg:left-20 z-8 lg:w-4/5 pl-4 md:pl-10 lg:pl-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-ultraBold text-white font-extrabold">
          Why
          <span className="text-gold"> MoonEX </span>?
        </h2>

        <div className="w-full my-6 mx-0 lg:mx-12 bg-gray-800 bg-opacity-30 rounded-xl">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="border-b border-r border-gray-700 px-4 py-2">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.comparison}
                      alt="Comparison"
                      className="w-20 md:w-28 text-center"
                    />
                  </div>
                </th>
                <th className="border-b border-r border-gray-700 px-4 py-2">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.aboutLogo}
                      alt="Moonex"
                      className="w-40"
                    />
                  </div>
                </th>
                <th className="border-b border-gray-700 px-4 py-2">
                  <div className="flex justify-center items-center">
                    <img src={asserts.uniswap} alt="Uniswap" className="w-28" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-r border-gray-700 text-white text-xs md:text-base px-2 md:px-6 py-2 text-left font-neueRegular">
                  1 . Point no one
                </td>
                <td className="border-b border-r border-gray-700 px-4 py-2 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.checkBold}
                      alt="Comparison"
                      className="w-5 md:w-8 text-center"
                    />
                  </div>
                </td>
                <td className="border-b border-gray-700 px-4 py-2 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.close}
                      alt="Comparison"
                      className="w-8 md:w-12 text-center"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-r border-gray-700 text-white text-xs md:text-base px-2 md:px-6 py-2 text-left font-neueRegular">
                  2 . Point no two this
                </td>
                <td className="border-b border-r border-gray-700 px-4 py-2 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.checkBold}
                      alt="Comparison"
                      className="w-5 md:w-8 text-center"
                    />
                  </div>
                </td>
                <td className="border-b border-gray-700 px-4 py-2 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.close}
                      alt="Comparison"
                      className="w-8 md:w-12 text-center"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-r border-gray-700 text-white text-xs md:text-base px-2 md:px-6 py-2 text-left font-neueRegular">
                  2 . Point no two this
                </td>
                <td className="border-b border-r border-gray-700 px-4 py-2 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.checkBold}
                      alt="Comparison"
                      className="w-5 md:w-8 text-center"
                    />
                  </div>
                </td>
                <td className="border-b border-gray-700 px-4 py-2 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.close}
                      alt="Comparison"
                      className="w-8 md:w-12 text-center"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-r border-gray-700 text-white text-xs md:text-base px-2 md:px-6 py-2 text-left font-neueRegular">
                  2 . Point no two this
                </td>
                <td className="border-b border-r border-gray-700 px-4 py-2 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.checkBold}
                      alt="Comparison"
                      className="w-5 md:w-8 text-center"
                    />
                  </div>
                </td>
                <td className="border-b border-gray-700 px-4 py-2 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.close}
                      alt="Comparison"
                      className="w-8 md:w-12 text-center"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-r border-gray-700 text-white text-xs md:text-base px-2 md:px-6 pt-2 pb-6 text-left font-neueRegular">
                  2 . Point no two this
                </td>
                <td className=" border-r border-gray-700 px-4 pt-2 pb-6 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.checkBold}
                      alt="Comparison"
                      className="w-5 md:w-8 text-center"
                    />
                  </div>
                </td>
                <td className=" border-gray-700 px-4 pt-2 pb-6 text-left">
                  <div className="flex justify-center items-center">
                    <img
                      src={asserts.close}
                      alt="Comparison"
                      className="w-8 md:w-12 text-center"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

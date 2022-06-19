import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
import dots from "../images/bg-dots.svg";
function Extentions() {
  return (
    <div>
      {/* top */}
      <h1 className="text-center mb-14 text-2xl ">Extentions</h1>
      {/* bottom */}
      <div className="flex items-center flex-wrap justify-center space-y14 md:justify-between md:space-x-14 ">
        {/* card-1 */}
        <div
          className="h-96 w-full md:w-max py-5 rounded-lg px-3 shadow-xl text-center flex flex-col items-center justify-between
          space-y-5"
        >
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <img src={chrome} alt="" />
            <h1>add to chrome</h1>
            <p className="text-gray-400">minumum version v733</p>
          </div>
          <img src={dots} alt="" />
          <button className="bg-blue-600 py-2 text-gray-200 px-5">
            add to chrome right now
          </button>
        </div>
        <div
          className="h-96 w-full md:w-max py-5 rounded-lg px-3 shadow-xl text-center flex flex-col items-center justify-between
          space-y-5"
        >
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <img src={firefox} alt="" />
            <h1>add to firefox</h1>
            <p className="text-gray-400">minumum version v733</p>
          </div>
          <img src={dots} alt="" />
          <button className="bg-blue-600 py-2 text-gray-200 px-5">
            add to firefox right now
          </button>
        </div>
        <div
          className="h-96 w-full md:w-max py-5 rounded-lg px-3 shadow-xl text-center flex flex-col items-center justify-between
          space-y-5"
        >
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <img src={opera} alt="" />
            <h1>add to opera</h1>
            <p className="text-gray-400">minumum version v733</p>
          </div>
          <img src={dots} alt="" />
          <button className="bg-blue-600 py-2 text-gray-200 px-5">
            add to opera right now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Extentions;

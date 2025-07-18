import SmartWatch from "../assets/Pic/SmartWatch-bottom.png";
import Ellipse from "../assets/Pic/Ellipse-525.png";

export default function BottomBanner() {
  return (
    <div className="bg-[#223949] w-[80%] my-5 mx-auto flex flex-row justify-evenly items-center p-4 rounded-lg relative  overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-3.5 text-white font-Inter">
        <h3 className="text-[44px] font-medium">Smart Watch</h3>
        <p className="text-[24px] font-light">Various design and brands</p>
        <a
          href=""
          className="text-black bg-[#FF6951] py-3 px-5 rounded-lg font-normal text-[16px]"
        >
          View
        </a>
      </div>

      <img src={SmartWatch} alt="" className="object-contain w-1/3 z-20" />
      <img
        src={Ellipse}
        alt=""
        className="z-10 absolute -right-7
      "
      />
    </div>
  );
}

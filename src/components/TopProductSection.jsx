import Apple from "../assets/Pic/AppleLogo.png";
import Sony from "../assets/Pic/SonyLogo.png";
import Samsung from "../assets/Pic/SamsungLogo.png";
import Canon from "../assets/Pic/CanonLogo.png";
import Huawei from "../assets/Pic/HuaweiLogo.png";
import Lenovo from "../assets/Pic/LenovoLogo.png";

export default function TopProductSection() {
  return (
    <div className="my-5 w-[80%] mx-auto flex flex-col justify-evenly ">
      <div className="border-[#B4B4B4] border-b-4">
        <h3 className="text-3xl font-medium font-Inter mb-4">Top Brands</h3>
      </div>
      <div className="flex flex-row justify-between items-center">
        <a href="">
          <img src={Apple} alt="" className="object-contain" />
        </a>
        <a href="">
          <img src={Sony} alt="" className="object-contain" />
        </a>
        <a href="">
          <img src={Samsung} alt="" className="object-contain" />
        </a>
        <a href="">
          <img src={Canon} alt="" className="object-contain" />
        </a>
        <a href="">
          <img src={Huawei} alt="" className="object-contain" />
        </a>
        <a href="">
          <img src={Lenovo} alt="" className="object-contain" />
        </a>
      </div>
    </div>
  );
}

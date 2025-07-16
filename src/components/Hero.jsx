import HeroImage from "../assets/Pic/HeroImage.png";
export default function Hero() {
  return (
    <div className=" flex flex-row justify-evenly font-Inter">
      <div className="flex flex-col justify-evenly items-start">
        <h1 className="text-[#042352] font-semibold text-6xl ">Tech Heim</h1>
        <h2 className="text-3xl font-medium text-[#042352]">
          "Join the <span className="text-[#F45E0C]">digital revolution</span>"
        </h2>
        <a
          href=""
          className="bg-[#F45E0C] w-[288px] py-2 px-4 text-white border-transparent rounded-lg text-center"
        >
          Explore More
        </a>
      </div>
      <div>
        <img src={HeroImage} className="w-[728px] h-[443px]" />
      </div>
    </div>
  );
}

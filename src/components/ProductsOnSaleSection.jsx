import ProductOnSaleA from "../assets/Pic/ProductOnSaleA.png";
import ProductOnSaleB from "../assets/Pic/ProductOnSaleB.png";
import ProductOnSaleC from "../assets/Pic//ProductOnSaleC.png";
import ProductOnSaleD from "../assets/Pic/ProductOnSaleD.jpg";
import ProductOnSaleE from "../assets/Pic/ProductOnSaleE.jpg";
import Cloud from "../assets/Pic/cloud.png";
import ProductOnSaleCard from "./ProductOnSaleCard";

const ProductsSale = [
  {
    offpercent: "50%",
    name: "Logitech G502 Gaming Mouse",
    image: ProductOnSaleA,
    oldprice: "$38.00",
    newprice: "$19.00",
  },
  {
    offpercent: "-30%",
    name: "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design",
    image: ProductOnSaleB,
    oldprice: "$49.00",
    newprice: "$34.30",
  },
  {
    offpercent: "-20%",
    name: "Apple Watch Series 7 (GPS, 41MM)",
    image: ProductOnSaleC,
    oldprice: "$289.00",
    newprice: "$231.20",
  },
  {
    offpercent: "-25%",
    name: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
    image: ProductOnSaleD,
    oldprice: "$950.22",
    newprice: "$712.66",
  },
  {
    offpercent: "-17%",
    name: "samsung Titan smart watch",
    image: ProductOnSaleE,
    oldprice: "$120.00",
    newprice: "$101.00",
  },
  // { title: "Smart Watch", image: SmartWatch },
];

export default function ProductOnSaleSection() {
  return (
    <div className="bg-[#063A88] w-[80%] mx-auto flex flex-row p-12 rounded-lg overflow-hidden relative">
      <div className="text-white w-[20%] mt-5 flex flex-col items-center z-10">
        <h2 className="font-Inter font-medium text-2xl">Product On Sale</h2>
        <h3 className="mb-24 font-Inter text-[20px] font-light">Shop Now!</h3>
        <a href="" className="font-Inter font-normal text-[16px] ">
          View All
        </a>
      </div>
      <div className="flex flex-row absolute justify-evenly -right-24 top-6 gap-2">
        {ProductsSale.map((product, index) => (
          <ProductOnSaleCard
            key={index}
            offpercent={product.offpercent}
            image={product.image}
            name={product.name}
            oldprice={product.oldprice}
            newprice={product.newprice}
          />
        ))}
      </div>
      <img
        src={Cloud}
        className="absolute w-1/3 -bottom-3.5 rotate-[1.8rad] -left-32 z-0 opacity-20 "
        alt=""
      />
    </div>
  );
}

import NewProductA from "../assets/Pic/NewProductA.png";
import NewProductB from "../assets/Pic/NewProductB.png";
import NewProductC from "../assets/Pic/NewProductC.png";
import NewProductD from "../assets/Pic/NewProductD.png";

import NewProductCard from "./NewProductCard";

const newproducts = [
  {
    image: NewProductA,
    name: "Iphone 14 promax 256 gig",
    price: "$930.90",
    rate: "4.5",
  },
  {
    image: NewProductB,
    name: "Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)",
    price: "$2535.00",
    rate: "4.8",
  },
  {
    image: NewProductC,
    name: "SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB",
    price: "$1018.00",
    rate: "4.7",
  },
  {
    image: NewProductD,
    name: "VR VisionTech X1",
    price: "$1,399.00",
    rate: "3.9",
  },
];

export default function NewProductSection() {
  return (
    <div className="flex flex-col w-[80%]  mx-auto">
      <div className="border-[#B4B4B4] border-b-4 flex flex-row justify-between  my-4 py-2.5">
        <h3>New Product</h3>
        <a
          href=""
          className="flex flex-row justify-evenly items-center gap-2.5"
        >
          View all
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.739687 9.27991C0.549687 9.27991 0.359688 9.20991 0.209688 9.05991C-0.0803125 8.76991 -0.0803125 8.28991 0.209688 7.99991L3.20969 4.99991L0.209688 1.99991C-0.0803125 1.70991 -0.0803125 1.22991 0.209688 0.939912C0.499687 0.649912 0.979688 0.649912 1.26969 0.939912L4.79969 4.46991C5.08969 4.75991 5.08969 5.23991 4.79969 5.52991L1.26969 9.05991C1.11969 9.20991 0.929687 9.27991 0.739687 9.27991Z"
              fill="#0C0C0C"
            />
          </svg>
        </a>
      </div>
      <div className="flex flex-row justify-evenly gap-1.5  ">
        {newproducts.map((product, index) => (
          <NewProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            rate={product.rate}
          />
        ))}
      </div>
    </div>
  );
}

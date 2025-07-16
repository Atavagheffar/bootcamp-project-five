import CategoryCard from "../components/CategoryCard";
import Accessories from "../assets/Pic/Accessories.png";
import Camera from "../assets/Pic/Camera.png";
import Laptop from "../assets/Pic/Laptop.png";
import SmartPhone from "../assets/Pic/SmartPhone.png";
import Gaming from "../assets/Pic/Gaming.png";
import SmartWatch from "../assets/Pic/SmartWatch.png";

const categories = [
  { title: "Accessories", image: Accessories },
  { title: "Camera", image: Camera },
  { title: "Laptop", image: Laptop },
  { title: "Smart Phone", image: SmartPhone },
  { title: "Gaming", image: Gaming },
  { title: "Smart Watch", image: SmartWatch },
];

export default function CategorySection() {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-6">
      {categories.map((cat, index) => (
        <CategoryCard key={index} title={cat.title} image={cat.image} />
      ))}
    </div>
  );
}

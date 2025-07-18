export default function CategoryCard({ title, image }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
      <img src={image} alt={title} className="w-36 h-36 object-contain mb-2" />
      <span className="text-[16px] text-gray-700 font-Inter font-light ">
        {title}
      </span>
    </div>
  );
}

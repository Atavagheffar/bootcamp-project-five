export default function CategoryCard({ title, image }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md w-28 h-32">
      <img src={image} alt={title} className="w-12 h-12 object-contain mb-2" />
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
}

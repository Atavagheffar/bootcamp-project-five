export default function ProductOnSaleCard({
  offpercent,
  image,
  name,
  oldprice,
  newprice,
}) {
  return (
    <div className="bg-white w-[184px] h-[237px] rounded-b-sm flex flex-col font-Inter p-2 gap-3 relative">
      <span className="bg-[#FDDBC9] text-[#F45E0C] rounded-br-lg rounded-tr-lg px-1.5 py-1 absolute top-2 left-0">
        {offpercent}
      </span>
      <img src={image} className="w-[168px] h-[146px] object-contain" />
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <div className="flex flex-row">
        <span>{oldprice}</span>
        <span>{newprice}</span>
      </div>
    </div>
  );
}

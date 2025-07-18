export default function ProductOnSaleCard({
  offpercent,
  image,
  name,
  oldprice,
  newprice,
}) {
  return (
    <div className="bg-white w-[200px]  rounded-b-sm flex flex-col font-Inter p-2 relative justify-between gap-1">
      <span className="bg-[#FDDBC9] text-[#F45E0C] rounded-br-lg rounded-tr-lg px-1.5 py-1 absolute top-2 left-0">
        {offpercent}
      </span>
      <img src={image} className="w-[168px] h-[146px] object-contain" />
      <span className="text-sm font-medium">{name}</span>
      <div className="flex flex-row justify-between items-center ">
        <span className="line-through text-gray font-light text-xs">
          {oldprice}
        </span>
        <span className="font-Inter text-sm font-normal text-black">
          {newprice}
        </span>
      </div>
    </div>
  );
}

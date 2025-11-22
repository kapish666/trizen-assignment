import Button from "./Button";

export default function Card() {
  const title = "Wireless Earbuds, IPX8";
  const price = 800;
  const discription = "Organic cotton, fairtrade certified";
  const rating = 4.5;

  return (
    <div className=" col-span-2 w-full">
      <div className=" min-h-64 rounded-md bg-gray-100 "></div>
      <div className="w-full flex justify-between font-semibold">
        <div>{title}</div>
        <div>{price} Rs</div>
      </div>
      <div className="text-[0.7rem] font-semibold text-gray-500">{discription}</div>
      <div className="flex items-center gap-1">
      <div className="text-[0.8rem] font-medium text-gray-500  ">Rating: 
        </div>
        <div className="text-[1rem] font-medium italic">
        {rating}
        </div>
      </div>
      <Button
        className="mt-1 p-1.5 pl-5 pr-5 border-2 border-gray-200 w-fit text-xs font-semibold rounded-4xl  hover:bg-gray-200 hover:cursor-pointer"
        text={"Add to Cart"}
      />
    </div>
  );
}

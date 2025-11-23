import { CiStar } from "react-icons/ci";
import Button from "./Button";
import Rating from "./Rating";

export default function Card() {
  const title = "Wireless Earbuds, IPX8";
  const price = 800;
  const discription = "Organic cotton, fairtrade certified";
  const rating = 4.2;

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
        <Rating value={rating} />
        </div>
      </div>
      <Button
        className='border-1 mt-1 p-1.5 text-sm rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer' 
        text={"Add to Cart"}
      />
    </div>
  );
}

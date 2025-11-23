import Button from "./Button";
import Rating from "./Rating";

export default function Card({product}) {

  return (
    <div className=" col-span-2 w-full">
      <div className="h-64 rounded-md bg-gray-100 overflow-hidden">
  <img
    src={product.images}
    alt={product.title}
    className="w-full h-full object-cover"
  />
</div>
      <div className="w-full flex justify-between font-semibold">
        <div>{product.title}</div>
        <div>{product.price} Rs</div>
      </div>
      <div className="text-[0.7rem] font-semibold text-gray-500">{product.discription}</div>
      <div className="flex items-center gap-1">
      <div className="text-[0.8rem] font-medium text-gray-500  ">Rating: 
        </div>
        <div className="text-[1rem] font-medium italic">
        <Rating value={product.rating} />
        </div>
      </div>
      <Button
        className='border-1 mt-1 p-1.5 text-sm rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer' 
        text={"Add to Cart"}
      />
    </div>
  );
}

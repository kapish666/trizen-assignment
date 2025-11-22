import { IoSearchOutline } from "react-icons/io5";

export default function Searchbar(){
    return (
        <div className="w-xs rounded-3xl bg-gray-100 text-sm font-medium text-gray-900 flex items-center">
            <input type="text" name="" id="" className="h-full w-[90%] p-2 outline-none " placeholder="Search product" />
            <IoSearchOutline size={20} />
        </div>
    )
}
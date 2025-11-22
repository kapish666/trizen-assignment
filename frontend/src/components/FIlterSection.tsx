import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";

export default function FilterSection(){
    const filters = ["Headphones Type","Price","Review","Color","Material","offer","All Filters"]
    return (
        <div className="flex items-center mt-5 justify-between">
        <div className="flex gap-4">
            {
                filters.map((item,index)=>{
                    return (
                        <Button key={index} className='p-1.5 pl-2 pr-2 bg-gray-200 w-fit text-xs font-medium rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer' text={item} icon={<RiArrowDropDownLine size={20} />}/>
                    )
                })
            }
        </div>
        <Button className='p-1.5 pl-4 pr-4 border-2 border-gray-200 w-fit text-xs font-medium rounded-4xl  hover:bg-gray-200 hover:cursor-pointer' text={"Sort by"} icon={<RiArrowDropDownLine size={20} />}/>
        </div>
    )
}
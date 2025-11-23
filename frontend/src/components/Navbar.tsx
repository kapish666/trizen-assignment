import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import Searchbar from "./Searchbar";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar(){

    const companyName = "Trizen";
    const options = [
        "Categories","Deals","What's New","Dilevery"
    ]
    const actionItems = [
        {name:"Account",icon:<MdOutlineAccountCircle size={20} />},
        {name:"Cart",icon:<IoCartOutline size={20} />}
    ]

    return (
        <div className="flex items-center justify-between w-full pl-4 pr-4 pt-4 pb-5 bg-white/70 backdrop-blur-xl ">
            {companyName}
            <div className="flex gap-10 items-center">
                {
                    options.map((item,index)=>{
                        if(index === 0){
                            return (
                                <div key={index} className="flex  items-center gap-1 ">
                                    <div>
                                    {item} 
                                    </div>
                                    <RiArrowDropDownLine size={25} />
                                </div>
                            )
                        }
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            <Searchbar/>
            <div className="flex gap-10">
                {
                    actionItems.map((item,index)=>{
                        return (
                            <div key={index} className="flex gap-1 items-center">
                                <div>
                                {item.icon}
                                </div>
                                <div>
                                {item.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
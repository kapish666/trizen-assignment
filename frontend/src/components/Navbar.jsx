import { IoCartOutline, IoClose } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import Searchbar from "./Searchbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar({products,onSelect}){

    const companyName = "Trizen";
    const options = [
        "Categories","Deals","What's New","Dilevery"
    ]
    const actionItems = [
        {name:"Account",icon:<MdOutlineAccountCircle size={20} />},
        {name:"Cart",icon:<IoCartOutline size={20} />}
    ]
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <div className="w-full  bg-white/70 backdrop-blur-xl shadow-md px-4 py-4 flex items-center justify-between">

      <div className="font-semibold text-lg">{companyName}</div>

      <div className="hidden text-[1rem] md:flex justify-around w-[35%] items-center">
        {options.map((item, index) =>
          index === 0 ? (
            <div key={index} className="flex items-center gap-1 cursor-pointer">
              <span>{item}</span>
              <RiArrowDropDownLine size={25} />
            </div>
          ) : (
            <div key={index} className="cursor-pointer">{item}</div>
          )
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <IoClose size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <div className="hidden sm:block w-56">
        <Searchbar onSelect={onSelect} products={products} />
      </div>

      <div className="hidden md:flex gap-8">
        {actionItems.map((item, index) => (
          <div key={index} className="flex gap-2 items-center cursor-pointer">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="flex md:hidden gap-4">
        {actionItems.map((item, index) =>
          index < 2 ? ( 
            <div key={index} className="cursor-pointer">{item.icon}</div>
          ) : null
        )}
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {/* Mobile options */}
            {options.map((item, index) =>
              index === 0 ? (
                <div key={index} className="flex items-center gap-1">
                  {item} <RiArrowDropDownLine size={20} />
                </div>
              ) : (
                <div key={index}>{item}</div>
              )
            )}

            <div className="mt-2">
              <Searchbar onSelect={onSelect} products={products} />
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {actionItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon} <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    )
}
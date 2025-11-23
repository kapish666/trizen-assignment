import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";
import FloatingSheet from "./FloatingSheet";
import { useState } from "react";
import { Slider } from "@mui/material";
import Rating from "./Rating";

export default function FilterSection() {
  const filters = ["Price", "Review", "All Filters"];
  const [buttonTouched, setButtonTouched] = useState(-1);
  const [price, setPrice] = useState([0, 5000]);
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center mt-5 justify-between">
      <div className="flex gap-4 relative">
        {filters.map((item, index) => {
          return (
            <Button
              onClick={() => setButtonTouched(index)}
              key={index}
              className="p-1.5 pl-2 pr-2 bg-gray-200 border-2 border-gray-200 w-fit text-xs font-medium rounded-4xl hover:bg-[#ffffff] hover:cursor-pointer"
              text={item}
              icon={<RiArrowDropDownLine size={20} />}
            />
          );
        })}
        {buttonTouched !== -1 && (
          <div>
            <FloatingSheet
              open={buttonTouched !== -1}
              onClose={() => setButtonTouched(-1)}
            >
              <div className="p-3">
                <h2 className="font-semibold mb-3">
                  {filters[buttonTouched]} Options
                </h2>
                {buttonTouched === 0 && (
                  <div className="w-[40%]">
                    <Slider
                      value={price}
                      onChange={(e, val) => setPrice(val)}
                      valueLabelDisplay="auto"
                      min={0}
                      max={5000}
                    />
                    <div className="flex justify-between text-sm mt-2">
                      <span>₹{price[0]}</span>
                      <span>₹{price[1]}</span>
                    </div>
                    <Button
                      className=" mt-4 border-1 mt-1 p-1.5 text-sm rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer"
                      onClick={() => console.log(price)}
                      text={"Submit"}
                    />
                  </div>
                )}
                {buttonTouched === 1 && (
                  <div>
                    <div className="flex items-center gap-7 ">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <label key={i} className="flex items-center gap-2">
                          <Rating value={i + 1} />
                          <input
                            type="checkbox"
                            checked={rating === i + 1}
                            onChange={(e) =>
                              e.target.checked ? setRating(i + 1) : setRating(0)
                            }
                          />{" "}
                        </label>
                      ))}
                    </div>
                    <Button
                      className=" mt-4 border-1 mt-1 p-1.5 text-sm rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer"
                      onClick={() => console.log(rating)}
                      text={"Submit"}
                    />
                  </div>
                )}
              </div>
            </FloatingSheet>
          </div>
        )}
      </div>
      <Button
        className="p-1.5 pl-4 pr-4 border-2 border-gray-200 w-fit text-xs font-medium rounded-4xl  hover:bg-gray-200 hover:cursor-pointer"
        text={"Sort by"}
        icon={<RiArrowDropDownLine size={20} />}
      />
    </div>
  );
}

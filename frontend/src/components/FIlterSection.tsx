import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";
import FloatingSheet from "./FloatingSheet";
import { useState } from "react";
import { Slider } from "@mui/material";
import Rating from "./Rating";
import { FaSliders } from "react-icons/fa6";

export default function FilterSection({setPriceFilter,setRatingFilter}) {
  const filters = ["Price", "Review"];
  const [buttonTouched, setButtonTouched] = useState(-1);
  const [price, setPrice] = useState([0, 5000]);
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center mt-5 justify-between gap-3 sm:gap-5">
  <div className="flex gap-2 sm:gap-5 relative items-center flex-wrap">
    {/* Filters Label */}
    <div className="flex items-center gap-1 font-medium text-gray-600 text-sm sm:text-base">
      Filters <FaSliders />
    </div>

    {filters.map((item, index) => (
      <Button
        onClick={() => setButtonTouched(index)}
        key={index}
        className="p-1 sm:p-1.5 pl-2 pr-2 bg-gray-200 border-2 border-gray-200 w-fit text-xs sm:text-sm font-medium rounded-4xl hover:bg-white hover:cursor-pointer"
        text={item}
        icon={<RiArrowDropDownLine size={20} />}
      />
    ))}

    {buttonTouched !== -1 && (
      <FloatingSheet
        open={buttonTouched !== -1}
        onClose={() => setButtonTouched(-1)}
      >
        <div className="p-3">
          <h2 className="font-semibold mb-3 text-sm sm:text-base">
            {filters[buttonTouched]} Options
          </h2>

          {buttonTouched === 0 && (
            <div className="w-full sm:w-[40%]">
              <Slider
                value={price}
                onChange={(e, val) => setPrice(val)}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
              />
              <div className="flex justify-between text-xs sm:text-sm mt-2">
                <span>₹{price[0]}</span>
                <span>₹{price[1]}</span>
              </div>
              <Button
                className="mt-4 border-1 p-1.5 text-xs sm:text-sm rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer"
                onClick={() => {
                  setPriceFilter(price);
                  setButtonTouched(-1);
                }}
                text={"Submit"}
              />
            </div>
          )}

          {buttonTouched === 1 && (
            <div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-7 ">
                {Array.from({ length: 5 }).map((_, i) => (
                  <label key={i} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                    <Rating value={i + 1} />
                    <input
                      type="checkbox"
                      checked={rating === i + 1}
                      onChange={(e) =>
                        e.target.checked ? setRating(i + 1) : setRating(0)
                      }
                    />
                  </label>
                ))}
              </div>
              <Button
                className="mt-4 border-1 p-1.5 text-xs sm:text-sm rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer"
                onClick={() => {
                  setRatingFilter(rating);
                  setButtonTouched(-1);
                }}
                text={"Submit"}
              />
            </div>
          )}
        </div>
      </FloatingSheet>
    )}
  </div>
</div>

  );
}

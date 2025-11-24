import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function Rating({ value }) {
  return (
    <div className="flex gap-1 text-yellow-500 text-sm">
      {Array.from({ length: 5 }, (_, i) => {
        const full = i + 1 <= Math.floor(value);
        const half =
          !full && i < value && value < i + 1;

        return full ? (
          <FaStar key={i} />
        ) : half ? (
          <FaStarHalfAlt key={i} />
        ) : (
          <FaRegStar key={i} />
        ); 
      })}
    </div>
  );
}

import { star } from "../../public/assets/icons";
import { shoeCard } from "../constants";

function ShoeCard() {
  return (
    <div className="flex justify-around flex-wrap mt-10 gap-7">
      {shoeCard.map((shoe, index) => {
        return (
          <div key={index} className="mb-6">
            <img src={shoe.src} alt={shoe.name} />
            <div className="flex mt-5 gap-2 items-center">
              <img src={star} alt="Star" />
              <h1 className="text-lg">({shoe.rating})</h1>
            </div>
            <h1 className="mt-4 font-Palanquin text-2xl font-semibold">{shoe.name}</h1>
            <h5 className="mt-3 text-[#ff6452] text-2xl font-semibold">{shoe.price}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default ShoeCard;

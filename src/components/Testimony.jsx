import { star } from "../../public/assets/icons";
import { testimonials } from "../constants";

function Testimony() {
  return (
    <div className="flex gap-32 max-xl:flex-col p-16 max-xl:p-8">
      {testimonials.map((testimony, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <img
              src={testimony.image}
              alt={testimony.name}
              width={120}
              height={120}
              className="rounded-full"
            />
            <p className="max-w-[384px] text-center text-[#6d6d6d] p-6 max-xl:p-3 text-lg">{testimony.testimony}</p>
            <span className="flex"> 
              <img src={star} alt="Star" />
              <p className="text-2xl text-[#6d6d6d]">({testimony.rating})</p>
            </span>
            <h1 className="p-3 font-Palanquin text-3xl font-bold text-center">{testimony.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Testimony;

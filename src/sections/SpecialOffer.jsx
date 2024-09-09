import { offer } from "../../public/assets/images";
import Shopbtn from "../components/Shopbtn";

function SpecialOffer() {
  return (
    <div className="mt-40 mb-10 flex justify-between items-center gap-4 max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center">
      <img src={offer} alt="Special Offer" className="max-xl:order-2" />
      <div className="max-xl:order-1">
        <h1 className="text-5xl font-Palanquin font-semibold">
          <span className="text-[#ff6452]">Special</span> Offer
        </h1>
        <p className="text-[#6d6d6d] text-lg mt-5">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="text-[#6d6d6d] text-lg mt-5 mb-5">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex items-center gap-5 flex-wrap [&>*]:mb-0">
          <Shopbtn />
          <button className="text-[#6d6d6d] px-8 py-4 rounded-full active:scale-95 border border-gray-500 xl:mb-20">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;

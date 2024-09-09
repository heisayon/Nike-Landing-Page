import { useState } from "react";
import { bigShoe1 } from "../../public/assets/images";
import { bigShoeShoePicker } from "../constants";
function ShoeShowcase() {
  const [shoeImage, setShoeImage] = useState(bigShoe1);
  return (
    <div className="bg-collectionBg max-xl:py-40 bg-center min-h-[100vh] relative 2xl:mr-8 flex justify-center">
      <div className="flex justify-center items-center">
        <img src={shoeImage} alt="Nike Shoe" />
      </div>
      <section className="absolute top-[90%]">
        <div className="flex pl-20 gap-4 max-sm:px-8">
          {bigShoeShoePicker.map((shoe, index) => {
            return (
              <div key={index}>
                <div
                  key={index}
                  className="bg-thumbnailBg rounded-xl border-2 bg-center max-h-[160px] max-w-[160px] flex justify-center items-center px-5 py-6 focus:border-[#ff6452] focus:outline-none focus:ring-0"
                >
                  <img
                    src={shoe.src}
                    alt="Nike Shoe"
                    width={127}
                    onClick={() => setShoeImage(shoe.src)}
                    className="cursor-pointer w-40"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ShoeShowcase;

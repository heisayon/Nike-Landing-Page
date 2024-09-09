import { shoe8 } from "../../public/assets/images";

function SuperQuality() {
  return (
    <div className="mt-28 flex justify-between flex-wrap max-xl:justify-center">
      <div className="xl:max-w-[512px]">
        <h1 className="text-5xl font-semibold font-Palanquin leading-[55px]">
          We Provide <span className="text-[#ff6452]">Super</span>{" "}
          <span className="text-[#ff6452]">Quality</span> Shoes
        </h1>
        <p className="mt-4 text-[#6d6d6d]">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 text-[#6d6d6d]">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <button className="bg-[#FF6452] text-white px-8 py-4 rounded-full gap-3 active:scale-95 transition-all hover:bg-opacity-90 mb-20 mt-10">
          View Details
        </button>
      </div>

      <section>
        <img src={shoe8} alt="Nike-Shoe" />
      </section>
    </div>
  );
}

export default SuperQuality;

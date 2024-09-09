import ShoeCard from "../components/ShoeCard";

function PopularProducts() {
  return (
    <div className="pt-32">
      <h1 className="text-5xl font-semibold leading-[58px] font-Palanquin">
        Our <span className="text-[#ff6452]">Popular</span> Products
      </h1>
      <p className="mt-8 text-[#6d6d6d] max-w-[500px]">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value.
      </p>
      <ShoeCard />
    </div>
  );
}

export default PopularProducts;

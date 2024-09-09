import Shopbtn from "../components/Shopbtn";
import Stats from "../components/Stats";
function Hero() {
  return (
    <div className="mt-8 2xl:px-40 py-3 max-2xl:px-8 m-auto max-w-[1880px]">
      <h1 className="text-text-primary text-xl font-medium">
        Our Summer collections
      </h1>
      <h1 className="font-Palanquin text-8xl font-bold max-md:text-[72px] max-md:leading-[82px] mt-10 bg-white 2xl:w-[730px] py-6">
        The New Arrival
      </h1>
      <h1 className="font-Palanquin text-8xl font-bold max-md:text-[72px] max-md:leading-[82px]">
        <span className="text-text-primary">Nike </span>Shoes
      </h1>
      <h1 className=" text-gray-500 mt-10 max-w-sm text-lg mb-14">
        Discover stylish Nike arrivals, quality comfort, and innovation for your
        active life.
      </h1>
      <Shopbtn />
      <Stats />
    </div>
  );
}

export default Hero;

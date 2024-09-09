import { arrowRight } from "../../public/assets/icons";

function Shopbtn() {
  return (
    <button className="flex bg-[#FF6452] text-white px-8 py-4 rounded-full gap-3 active:scale-95 transition-all hover:bg-opacity-90 mb-20">
      Shop now
      <span>
        <img src={arrowRight} alt="right" />
      </span>
    </button>
  );
}

export default Shopbtn;

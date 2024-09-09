import { serviceCard } from "../constants";

function Card() {
  return (
    <div className="card-grid max-xl:card-grid-small">
      {serviceCard.map((action, index) => {
        return (
          <div key={index} className="py-16 px-10 shadow-2xl rounded-xl card-transition card-transition-hover">
            <div className="rounded-full bg-[#ff6452] p-3 inline-block">
              <img src={action.icon} />
            </div>

            <h1 className="font-Palanquin text-[28px] font-semibold">
              {action.header}
            </h1>
            <p className="max-w-[322px] mt-4 text-[#6d6d6d] text-lg">
              {action.service}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;

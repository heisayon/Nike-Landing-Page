import { statistics } from "../constants";

function Stats() {
  return (
    <div className="flex gap-20 flex-wrap">
      {statistics.map((stat, index) => {
        return (
          <ul key={index}>
            <p className="flex flex-col">
              <li className=" font-Palanquin text-5xl font-bold ">
                {stat.value}
              </li>
              <li className="text-[#6d6d6d] text-lg">{stat.label}</li>
            </p>
          </ul>
        );
      })}
    </div>
  );
}

export default Stats;

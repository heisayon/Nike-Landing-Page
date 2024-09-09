import Testimony from "../components/Testimony";

function CustomerReview() {
  return (
    <div className="mt-32 mb-10 bg-[#f5f6ff] py-24 px-16 max-xl:py-12 max-xl:px-8 flex flex-col items-center">
      <div>
        <h1 className="text-5xl font-bold font-Palanquin text-center">
          What Our <span className="text-[#ff6564]">Customers</span> Say
        </h1>
        <p className="max-w-[512px] text-center p-6 text-[#6d6d6d] text-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <Testimony />
    </div>
  );
}
export default CustomerReview;

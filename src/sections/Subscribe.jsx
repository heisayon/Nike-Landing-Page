function Subscribe() {
  return (
    <div className="py-32 px-16 max-sm:px-4 flex justify-between items-center max-xl:block">
      <h1 className="font-Palanquin text-5xl font-bold xl:max-w-[448px] leading-[70px] max-xl:text-center max-xl:mb-8">
        Sign Up for <span className="text-[#ff6452]">Updates </span>& Newsletter
      </h1>

      <div className="flex border border-black rounded-full pl-6 py-3 xl:w-[40%] max-xl:w-full gap-6 max-sm:block max-sm:border-none">
        <input
          placeholder="subscribe@nike.com"
          className="flex-1 focus:outline-none text-[16px] font-Palanquin text-[#6d6d6d] max-sm:border max-sm:border-black max-sm:px-5 max-sm:py-5 max-sm:w-full max-sm:rounded-full"
        />
        <div className="mr-3">
          <button className="bg-[#FF6452] text-white px-8 py-3 rounded-full active:scale-95 transition-all hover:bg-opacity-90 max-sm:w-full max-sm:mt-5 max-sm:py-5">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

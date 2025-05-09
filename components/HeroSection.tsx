import { HiArrowRight } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="text-center py-20 md:py-56 mx-4 my-8 md:my-16 md:mx-16 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-4xl px-4 dark:bg-neutral-900"
    >
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl font-bold md:mb-4 max-w-4xl mx-auto tracking-tight">
          Convert Unused Licenses Into Real Profit Today
        </h1>
        <p className="text-sm md:text-lg my-8 md:my-10 max-w-2xl mx-auto font-medium text-neutral-500">
          SoftSell helps businesses resell their unused software licenses
          quickly, securely, and for top value — all in just a few clicks.
        </p>
        <button className="justify-center bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl text-white font-semibold cursor-pointer flex gap-1 items-center w-fit mx-auto">
          Sell My Licenses
          <HiArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

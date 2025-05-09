import { HiArrowUpOnSquare } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 md:px-16 text-center">
      <h2 className="text-4xl font-bold mb-4">How SoftSell Works</h2>
      <p className="mb-12 text-neutral-500 font-semibold">An easy way to sell your software license</p>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-shadow duration-300 p-8 rounded-2xl cursor-pointer dark:bg-neutral-900">
          <div className="bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
            <HiArrowUpOnSquare className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">1. Upload Your License</h3>
          <p className="text-neutral-600 dark:text-neutral-500 max-w-sm">
            Simply fill out our form with details of the software license(s) you
            no longer need — no technical knowledge required.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-shadow duration-300 p-8 rounded-2xl cursor-pointer dark:bg-neutral-900">
          <div className="bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
            <HiMagnifyingGlass className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            2. Get a Free Valuation
          </h3>
          <p className="text-neutral-600 dark:text-neutral-500 max-w-sm">
            Our smart valuation tool analyzes your license and provides a
            competitive offer based on current market demand.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-shadow duration-300 p-8 rounded-2xl cursor-pointer dark:bg-neutral-900">
          <div className="bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
            <HiMiniCurrencyDollar className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">3. Get Paid Instantly</h3>
          <p className="text-neutral-600 dark:text-neutral-500 max-w-sm">
            Accept the offer and receive payment through your preferred method —
            fast, secure, and hassle-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

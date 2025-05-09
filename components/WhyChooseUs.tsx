import { HiMiniShieldCheck } from "react-icons/hi2";
import { HiBolt } from "react-icons/hi2";
import { HiChartBarSquare } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-16 text-center">
      <h2 className="text-4xl font-bold mb-14">Why Choose SoftSell?</h2>
      <div className="grid md:grid-cols-4 gap-8 text-left">
        {/* Benefit 1 */}
        <div className="dark:bg-neutral-900 p-6 rounded-2xl shadow-2xl shadow-emerald-500/20 flex flex-col items-center">
          <div className="bg-emerald-100 text-emerald-600 rounded-full p-3 inline-block mb-4">
            <HiMiniShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
          <p className="text-neutral-600 dark:text-neutral-500">
            We use industry-standard encryption and vetted partners to ensure
            your license transfers are 100% safe and compliant.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="dark:bg-neutral-900 p-6 rounded-2xl shadow-2xl shadow-emerald-500/20 flex flex-col items-center">
          <div className="bg-emerald-100 text-emerald-600 rounded-full p-3 inline-block mb-4">
            <HiBolt className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Fast Payouts</h3>
          <p className="text-neutral-600 dark:text-neutral-500">
            No long waits. Once your license is approved, we process your
            payment quickly — often within 24 hours.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="dark:bg-neutral-900 p-6 rounded-2xl shadow-2xl shadow-emerald-500/20 flex flex-col items-center">
          <div className="bg-emerald-100 text-emerald-600 rounded-full p-3 inline-block mb-4">
            <HiChartBarSquare className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Maximized Value</h3>
          <p className="text-neutral-600 dark:text-neutral-500">
            Our proprietary pricing engine ensures you get top dollar based on
            real-time software market demand.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="dark:bg-neutral-900 p-6 rounded-2xl shadow-2xl shadow-emerald-500/20 flex flex-col items-center">
          <div className="bg-emerald-100 text-emerald-600 rounded-full p-3 inline-block mb-4">
            <HiUserGroup className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Trusted by Businesses</h3>
          <p className="text-neutral-600 dark:text-neutral-500">
            Hundreds of companies trust SoftSell to convert unused software into
            working capital — join the movement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

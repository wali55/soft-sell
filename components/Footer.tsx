import Image from "next/image";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="mt-8 py-12 px-6 md:px-16 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-t dark:border-neutral-600"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        {/* Logo & Description */}
        <div>
          <div className="flex gap-1 items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="size-6"
            />
            <span className="text-xl font-semibold">SoftSell</span>
          </div>
          <p className="text-neutral-500 mt-2">
            Turn your unused software licenses into profit. Fast, secure, and
            hassle-free.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-neutral-500">
            <li>
              <a href="#how-it-works" className="hover:text-emerald-500">
                How It Works
              </a>
            </li>
            <li>
              <a href="#why-choose-us" className="hover:text-emerald-500">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-emerald-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-neutral-500">
            <li>
              <a href="#" className="hover:text-emerald-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-500">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <p className="text-neutral-500">Email: support@softsell.io</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-neutral-300 dark:border-neutral-800 pt-6 text-center text-neutral-500 text-sm">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

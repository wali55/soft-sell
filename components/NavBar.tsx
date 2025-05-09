import Image from "next/image";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="relative p-4 flex justify-between items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-b dark:border-neutral-600">
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
      <div className="hidden md:block">
        <ul className="flex gap-6 font-semibold">
          <li className="hover:text-emerald-500">
            <a href="#">How it works</a>
          </li>
          <li className="hover:text-emerald-500">
            <a href="#">Why choose us</a>
          </li>
          <li className="hover:text-emerald-500">
            <a href="#">Testimonials</a>
          </li>
          <li className="hover:text-emerald-500">
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <button
          onClick={toggleTheme}
          className="size-8 rounded-full bg-neutral-300 dark:text-neutral-800 md:flex items-center justify-center hidden"
        >
          {theme === "dark" ? (
            <HiSun className="size-4" />
          ) : (
            <HiMoon className="size-4" />
          )}
        </button>
        <button className="hidden bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl text-white font-semibold cursor-pointer md:flex gap-1 items-center">
          Get started
          <HiArrowRight className="size-4" />
        </button>
      </div>
      <button onClick={() => setOpen(true)} className="block md:hidden">
        <HiMiniBars3 className="size-6" />
      </button>
      {open && (
        <div className="bg-neutral-50 dark:bg-neutral-800 h-screen w-screen inset-0 fixed flex flex-col md:hidden gap-8 items-center py-8">
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
          <button
            className="absolute top-4 right-6"
            onClick={() => setOpen(false)}
          >
            <HiMiniXMark className="size-10" />
          </button>
          <div>
            <ul className="flex flex-col gap-4 font-semibold text-center">
              <li className="hover:text-emerald-500">
                <button>How it works</button>
              </li>
              <li className="hover:text-emerald-500">
                <button>Why choose us</button>
              </li>
              <li className="hover:text-emerald-500">
                <button>Testimonials</button>
              </li>
              <li className="hover:text-emerald-500">
                <button>Contact us</button>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={toggleTheme}
              className="size-8 rounded-full bg-neutral-300 dark:text-neutral-800 flex items-center justify-center md:hidden"
            >
              {theme === "dark" ? (
                <HiSun className="size-4" />
              ) : (
                <HiMoon className="size-4" />
              )}
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl text-white font-semibold cursor-pointer flex gap-1 items-center">
              Get started
              <HiArrowRight className="size-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

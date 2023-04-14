"use client";

import {
  AlignJustify,
  MessageSquare,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Auctions", href: "#", current: false },
  { name: "Marketplace", href: "#", current: false },
  { name: "Drops", href: "#", current: false },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const body = document.body;

    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];

    isOpen
      ? body.classList.add(...customBodyStyle)
      : body.classList.remove(...customBodyStyle);
  }, [isOpen]);

  return (
    <header className={cn("container px-4 py-4 mx-auto")}>
      <nav className={cn("flex justify-between p-2 md:p-4")}>
        <button onClick={toggle} className="md:hidden outline-none">
          <AlignJustify />
        </button>

        <h1 className="font-stix-two font-bold text-2xl mt-1.5">ARTSY.</h1>

        <ul className="hidden md:flex gap-10">
          {navigation.map((item) => (
            <li
              key={item.name}
              className={cn(
                item.current && "underline font-medium",
                "block rounded-md text-2xl"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className={cn("flex gap-4")}>
          <Search />
          <ShoppingCart />
        </div>
      </nav>

      {/* mobile nav */}
      <nav
        className={cn(
          isOpen ? "block" : "hidden",
          "absolute top-0 right-0 left-0 bg-white lg:hidden min-h-full"
        )}
      >
        <div className="flex flex-col gap-16 px-8 pt-8 relative h-full">
          <div className="flex justify-between items-center">
            <h2 className="font-stix-two scroll-m-20 text-2xl font-bold uppercase">
              Artsy.
            </h2>

            <button onClick={toggle}>
              <X size={36} strokeWidth={1.5} />
            </button>
          </div>

          <ul className="flex flex-col gap-10">
            {navigation.map((item) => (
              <li
                key={item.name}
                className={cn(
                  item.current && "underline font-medium",
                  "block rounded-md text-2xl"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-[#3341C1] rounded-full absolute bottom-10 flex justify-center items-center right-10 w-14 h-14">
          <MessageSquare color="#fff" fill="white" size={34} />
        </button>
      </nav>
      {/* mobile nav end */}
    </header>
  );
}

export default Navbar;

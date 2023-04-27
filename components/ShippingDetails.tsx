import { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";
import { Breadcrumb } from "./ui";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

function ShippingDetails({
  next,
  back,
  className,
}: {
  next: () => void;
  back: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: ref.current?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={cn("w-full px-2.5 sm:px-10 lg:px-20", className)} ref={ref}>
      <Breadcrumb
        items={["Home", "Marketplace", "Cart", "Shipping"]}
        className="sm:hidden"
      />

      <form className="grid grid-cols-2 gap-7">
        <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888]">
          <label htmlFor="email" className="text-lg">
            Your email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="dhatguy@mail.com"
            className="h-[50px] border-gray-300 bg-[#F2F2F2]"
          />
          <div className="flex items-center gap-1">
            <Checkbox className="h-4 w-4 rounded-md bg-[#d9d9d9]" />
            <p className="text-sm text-[#747474]">
              Get updates about new drops & exclusive offers
            </p>
          </div>
        </div>

        <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888]">
          <label htmlFor="name" className="text-lg">
            Your full name
          </label>
          <Input
            type="text"
            id="name"
            className="h-[50px] border-gray-300 bg-[#F2F2F2]"
          />
        </div>

        <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888]">
          <label htmlFor="wallet" className="text-lg">
            Choose a wallet
          </label>
          <select
            id="wallet"
            className="h-[50px] rounded-md border border-gray-300 bg-[#F2F2F2] px-2"
          >
            <option disabled>Wallet</option>
            <option value="metamask">Metamask</option>
            <option value="walletconnect">WalletConnect</option>
            <option value="coinbase">Coinbase</option>
            <option value="phantom">Phantom</option>
          </select>
        </div>

        <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888]">
          <label htmlFor="city" className="text-lg">
            City
          </label>
          <Input
            type="text"
            id="city"
            className="h-[50px] border-gray-300 bg-[#F2F2F2]"
          />
        </div>

        <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888] sm:col-span-1">
          <label htmlFor="country" className="text-lg">
            Country
          </label>
          <Input
            type="text"
            id="country"
            className="h-[50px] border-gray-300 bg-[#F2F2F2]"
          />
        </div>

        <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888] sm:col-span-1">
          <label htmlFor="postal" className="text-lg">
            Postal Code
          </label>
          <Input
            type="text"
            id="postal"
            className="h-[50px] border-gray-300 bg-[#F2F2F2]"
          />
        </div>

        <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888]">
          <label htmlFor="phone" className="text-lg">
            Phone Number
          </label>
          <Input
            type="text"
            id="phone"
            className="h-[50px] border-gray-300 bg-[#F2F2F2]"
          />
        </div>

        <div className="col-span-2 flex flex-col items-center gap-4">
          <Button
            onClick={next}
            type="button"
            className="bg-[#3341C1] px-12 py-6 text-lg hover:bg-blue-600"
          >
            Proceed to payment
          </Button>

          <Button
            onClick={back}
            variant="ghost"
            type="button"
            className="mt-2 block text-center text-lg text-[#006CA2] underline"
          >
            Go back to cart
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ShippingDetails;

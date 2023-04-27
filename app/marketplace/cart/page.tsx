"use client";

import { useState } from "react";
import { useSnapshot } from "valtio";
import Payment from "~/components/Payment";
import ShippingDetails from "~/components/ShippingDetails";
import ShoppingCart from "~/components/ShoppingCart";
import useMediaQuery from "~/hooks/useMediaQuery";
import { cn } from "~/lib/utils";
import { state } from "~/state";

function Page() {
  const [step, setStep] = useState(0);
  const matches = useMediaQuery("(min-width: 1024px)");
  const cartState = useSnapshot(state);

  return (
    <>
      <div className="my-20">
        <ul className="mx-24 -mb-px hidden flex-wrap items-center justify-between border-b border-[#747474] md:flex">
          <li
            className={cn(
              "inline-block cursor-pointer border-b-2 border-transparent p-4 text-2xl text-[#888]",
              {
                "font-medium text-black border-[#2F4333]": step === 0,
              }
            )}
            onClick={() => (cartState.cart.length === 0 ? null : setStep(0))}
          >
            Shopping cart
          </li>

          <li
            className={cn(
              "inline-block cursor-pointer border-b-2 border-transparent p-4 text-2xl text-[#888]",
              {
                "font-medium text-black border-[#2F4333]": step === 1,
              }
            )}
            onClick={() => (cartState.cart.length === 0 ? null : setStep(1))}
          >
            Shopping details
          </li>

          <li
            className={cn(
              "inline-block cursor-pointer border-b-2 border-transparent p-4 text-2xl text-[#888]",
              {
                "font-medium text-black border-[#2F4333]": step === 2,
              }
            )}
            onClick={() => (cartState.cart.length === 0 ? null : setStep(2))}
          >
            Payment details
          </li>
        </ul>
      </div>

      <div className="flex w-full">
        {step === 1 && (
          <ShippingDetails back={() => setStep(0)} next={() => setStep(2)} />
        )}

        <ShoppingCart
          next={() => setStep(1)}
          currentStep={step}
          className={cn({
            hidden: (step === 1 && !matches) || step === 2,
          })}
        />

        {step === 2 && <Payment />}
      </div>
    </>
  );
}

export default Page;

"use client";

import { useSearchParams } from "next/navigation";
import { DeliveryWoman, GradientCircle } from "~/components/icons";

function Page() {
  const searchParams = useSearchParams();

  return (
    <>
      <div className="absolute -left-36 -top-16 hidden sm:block">
        <GradientCircle />
      </div>
      <div className="relative grid min-h-[90vh] place-content-center justify-items-center gap-8 px-3">
        <DeliveryWoman className="h-[246px] w-[275px] sm:h-[405px] sm:w-[454px]" />
        <div className="space-y-3">
          <p className="text-center text-lg font-medium sm:text-3xl">
            Hey Celestina, thank you for your purchase.
          </p>
          <p className="text-center text-gray sm:text-xl">
            You are amazing. Cheers to being{" "}
            <span className="font-bold">ARTSY!</span>
          </p>
        </div>

        <div className="absolute -left-5 top-0 h-20 w-20 rounded-full bg-[#006CA2] blur-xl sm:hidden" />
        <div className="absolute right-1/3 top-20 h-20 w-20 rounded-full bg-[#9B62EC] blur-xl sm:hidden" />
        <div className="absolute bottom-1/3 right-0 h-28 w-32 rounded-full bg-[#E27625] blur-2xl sm:hidden" />
      </div>
    </>
  );
}

export default Page;

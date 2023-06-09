import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { Breadcrumb } from "~/components/ui";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { removeFromCart, state, updateQuantity } from "~/state";

function ShoppingCart({
  next,
  className,
  currentStep,
}: {
  next: () => void;
  currentStep?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cartState = useSnapshot(state);

  useEffect(() => {
    window.scrollTo({
      top: ref.current?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  }, []);

  if (cartState.cart.length === 0) {
    return (
      <div className="w-full px-2.5 sm:px-10 lg:px-20">
        <Breadcrumb
          items={["Home", "Marketplace", "Cart"]}
          className="px-3 sm:hidden"
        />
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
          <div className="flex gap-4 items-center flex-wrap justify-center">
            <X size={50} />
            <h1 className="text-4xl font-bold">Your cart is empty</h1>
          </div>
          <Link href="/marketplace">
            <span className="text-lg font-medium text-[#888]">
              Go to Marketplace
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full sm:px-16", className)} ref={ref}>
      <Breadcrumb
        items={["Home", "Marketplace", "Cart"]}
        className="px-3 sm:hidden"
      />

      <div className="mx-auto mt-10 flex max-w-xs items-center justify-between rounded-full bg-[#3A3A3A] px-8 py-1.5 sm:hidden">
        <div className="rounded-full bg-white px-6 py-2 text-lg font-medium">
          Shop
        </div>
        <div className="text-lg font-medium text-white">Scheduled</div>
      </div>

      <div className="mt-20 flex flex-col gap-10 overflow-y-scroll px-3 sm:mt-10 sm:max-h-96">
        {cartState.cart.map((item, i) => (
          <div
            className="flex gap-4 sm:gap-10 sm:border-b sm:border-gray-300 sm:pb-10"
            key={item.id}
          >
            <Image
              src={item.image}
              width={200}
              height={200}
              alt="img"
              className="h-32 w-32 object-cover sm:h-52 sm:w-52 sm:rounded-md"
            />

            <div className="flex flex-col justify-between">
              <div className="font-cardo italic text-gray sm:hidden">
                Editorials
              </div>
              <h2 className="text-2xl font-bold sm:font-medium">{item.name}</h2>
              <div className="hidden text-[#888] sm:block">Clearamane</div>
              <div className="hidden text-[#888] sm:block">
                Size: <span className="text-black">200 ft</span>
              </div>
              <div className="flex items-center rounded-xl border border-[#000] sm:border-none">
                <Button
                  variant="ghost"
                  type="button"
                  disabled={item.quantity === 1}
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                  className="h-8 w-12 text-xl font-medium sm:text-3xl"
                >
                  &minus;
                </Button>

                <span>
                  <Input
                    type="number"
                    id="Quantity"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => updateQuantity(item, +e.target.value)}
                    className={cn(
                      "h-8 w-14 rounded-none border-y-0 border-[#000] text-center text-xl font-medium sm:border-none sm:text-3xl",
                      "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    )}
                  />
                </span>

                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                  className="h-8 w-12 text-xl font-medium sm:text-3xl"
                >
                  &#43;
                </Button>
              </div>
            </div>

            <div className="ml-auto flex flex-col items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                onClick={() => removeFromCart(item)}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#888] p-0"
              >
                <X color="#888" />
              </Button>
              <div className="font-cardo text-2xl font-bold sm:text-3xl sm:font-normal">
                ${item.price * item.quantity}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 bg-white px-3 py-8 shadow-xl sm:shadow-none md:flex-row-reverse">
        <div className="flex flex-col gap-3 sm:flex-1 sm:gap-5">
          <div className="flex items-center justify-between text-xl sm:text-2xl">
            <div className="text-[#888]">Products in cart:</div>
            <div className="font-medium">{cartState.cart.length} items</div>
          </div>
          <div className="flex items-center justify-between text-xl sm:text-2xl">
            <div className="text-[#888]">Shipping:</div>
            <div className="font-medium">$2.50</div>
          </div>
          <div className="flex items-center justify-between text-xl sm:text-2xl">
            <div className="text-[#888]">Total:</div>
            <div className="font-medium">${cartState.total}</div>
          </div>
          <div className="border-b border-dashed border-gray sm:hidden"></div>
          <div className="flex items-center justify-between text-xl sm:text-2xl">
            <div className="text-[#888]">Grand total:</div>
            <div className="font-medium">
              ${cartState.total + (2.5).toFixed(2)}
            </div>
          </div>
        </div>
        {currentStep === 0 && (
          <div className="flex flex-col items-center gap-4 sm:flex-1 sm:justify-center">
            <Button
              type="button"
              onClick={next}
              disabled={cartState.cart.length === 0}
              className="bg-[#3341C1] px-14 py-6 font-medium hover:bg-blue-700 sm:px-20 sm:py-10 sm:text-2xl"
            >
              Proceed to checkout
            </Button>

            <Link
              href="/marketplace"
              className="text-lg text-[#006CA2] underline sm:text-2xl"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;

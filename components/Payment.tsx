import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";
import { Breadcrumb } from "./ui";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

const paymentIcons = [
  "/images/Metamask.jpg",
  "/images/Coinbase.jpg",
  "/images/WalletConnect.jpg",
  "/images/Phantom.jpg",
];

function Payment({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: ref.current?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className={cn("w-full space-y-7 px-2.5 sm:px-10 lg:px-20", className)}
      ref={ref}
    >
      <Breadcrumb
        items={["Home", "Marketplace", "Cart", "Shipping", "Payment"]}
        className="sm:hidden"
      />

      <div className="flex items-center justify-between sm:mx-3">
        <div className="hidden text-3xl font-medium sm:block">
          Payment method
        </div>
        <div className="flex gap-3">
          <svg
            width="14"
            height="19"
            viewBox="0 0 14 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8333 8.3125H11.6667V4.75C11.6667 2.1375 9.56667 0 7 0C4.43333 0 2.33333 2.1375 2.33333 4.75V8.3125H1.16667C0.583333 8.3125 0 8.90625 0 9.5V17.8125C0 18.4062 0.583333 19 1.16667 19H12.8333C13.4167 19 14 18.4062 14 17.8125V9.5C14 8.90625 13.4167 8.3125 12.8333 8.3125ZM8.16667 16.625H5.83333L6.3 14.0125C5.71667 13.775 5.25 13.0625 5.25 12.4688C5.25 11.5188 6.06667 10.6875 7 10.6875C7.93333 10.6875 8.75 11.5188 8.75 12.4688C8.75 13.1812 8.4 13.775 7.7 14.0125L8.16667 16.625ZM9.33333 8.3125H4.66667V4.75C4.66667 3.44375 5.71667 2.375 7 2.375C8.28333 2.375 9.33333 3.44375 9.33333 4.75V8.3125Z"
              fill="#747474"
            />
          </svg>
          <span className="text-[#747474]">Secure server</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex w-full flex-col lg:w-2/3">
          <div className="space-y-6 bg-white sm:rounded-md sm:p-8 sm:shadow-xl">
            <div className="space-y-7">
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z"
                    fill="#28A814"
                  />
                  <path
                    d="M12 7.5C11.11 7.5 10.24 7.76392 9.49994 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18869 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5Z"
                    fill="#28A814"
                  />
                </svg>
                <div className="text-xl font-medium">Select your wallet</div>
              </div>
              <div className="space-y-7">
                <p className="max-w-sm text-gray">
                  Connect with one of our available wallet providers or add and
                  connect a new wallet.
                </p>
                <div className="flex items-center justify-center gap-4 sm:justify-start">
                  {paymentIcons.map((icon, i) => (
                    <div key={i} className="flex items-center">
                      <Image
                        src={icon}
                        width={24}
                        height={24}
                        className="h-[42px] w-[42px] object-cover"
                        alt="payment-icon"
                      />
                    </div>
                  ))}
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-black">
                    <Plus color="#333" size={30} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-4">
              <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888]">
                <label htmlFor="walletType" className="text-lg">
                  Wallet Type
                </label>
                <Input
                  type="text"
                  id="walletType"
                  className="h-[50px] border-gray-300 bg-[#F2F2F2]"
                />
              </div>

              <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888]">
                <label htmlFor="key" className="text-lg">
                  Key
                </label>
                <Input
                  type="text"
                  placeholder="Please, enter your key"
                  id="key"
                  className="h-[50px] border-gray-300 bg-[#F2F2F2]"
                />
              </div>

              <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888] sm:col-span-1">
                <label htmlFor="expiryDate" className="text-lg">
                  Expiry date
                </label>
                <Input
                  type="text"
                  id="expiryDate"
                  className="h-[50px] border-gray-300 bg-[#F2F2F2]"
                />
              </div>

              <div className="col-span-2 grid w-full items-center gap-1.5 text-[#888] sm:col-span-1">
                <label htmlFor="safeCode" className="text-lg">
                  Safe code
                </label>
                <Input
                  type="text"
                  id="safeCode"
                  className="h-[50px] border-gray-300 bg-[#F2F2F2]"
                />
              </div>

              <div className="col-span-2 flex items-center gap-1">
                <Checkbox className="h-4 w-4 rounded-md bg-[#d9d9d9]" />
                <p className="text-sm text-[#747474]">
                  Save my wallet details & information for future transactions
                </p>
              </div>
            </div>
          </div>
          <Link
            href={{
              pathname: "/thank-you",
              // query: {
              //   from: "checkout",
              // },
            }}
            className="mx-auto mt-7"
          >
            <Button className="h-14 w-72 bg-[#3341C1] text-lg font-medium hover:bg-blue-800">
              Confirm
            </Button>
          </Link>
        </div>

        <div className="flex-col gap-6 px-4 sm:flex lg:w-1/3">
          <h2 className="border-b py-8 text-2xl font-medium">
            Payment Summary
          </h2>

          <div className="border-b py-8">
            <p className="text-xl">Metamask wallet: 002345KJi90pzzz3</p>
            <p className="text-lg text-gray">
              Actively linked to Ketu, Lagos Nigeria.
            </p>
          </div>

          <div className="border-b py-8 text-lg">
            Expected arrival date: Between 22nd September and 26th September
            2022
          </div>

          <div className="flex flex-col gap-3 py-6 sm:flex-1 sm:gap-5">
            <div className="flex items-center justify-between text-xl sm:text-2xl">
              <div className="text-[#888]">Products in cart:</div>
              <div className="font-medium">4 items</div>
            </div>
            <div className="flex items-center justify-between text-xl sm:text-2xl">
              <div className="text-[#888]">Shipping:</div>
              <div className="font-medium">$2.50</div>
            </div>
            <div className="flex items-center justify-between text-xl sm:text-2xl">
              <div className="text-[#888]">Total:</div>
              <div className="font-medium">$114.00</div>
            </div>
            <div className="border-b border-dashed border-gray sm:hidden"></div>
            <div className="flex items-center justify-between text-xl sm:text-2xl">
              <div className="text-[#888]">Grand total:</div>
              <div className="font-medium">$116.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

// "use client";

import { Eye, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auctions } from "~/DATA/auctions";
import LiveReactions from "~/components/icons/LiveReactions";
import { Breadcrumb, CircledArrow } from "~/components/ui";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

const msgs = [
  {
    id: 1,
    name: "Ella Flynn",
    text: "Tight bid",
  },
  {
    id: 2,
    name: "Madam Benson",
    text: "God abeg 🤲🏻",
  },
  {
    id: 3,
    name: "Boma Jango",
    text: "0.900 ETH",
  },
  {
    id: 1,
    name: "Boda Shaggi",
    text: "Take 0.00002 ETH abeg",
  },
];

export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const auction = auctions.find((auction) => auction.id === +id);

  if (!auction) {
    notFound();
  }

  return (
    <>
      {/* mobile */}
      <div
        className={cn(`h-screen bg-cover sm:hidden`)}
        style={{ backgroundImage: `url(${auction?.image})` }}
      >
        <div className="flex h-full flex-col justify-between p-5 text-white">
          <div className="flex justify-between">
            <span className="font-medium">Tag: Lost or Wither</span>

            <div className="flex items-center gap-3">
              <div className="rounded bg-[#006CA2] p-1 px-2 text-sm font-medium uppercase">
                live
              </div>
              <div className="flex items-center gap-1.5 rounded bg-white/40 p-1">
                <Eye size={20} fill="white" stroke="#B0B9BD" />
                <span className="text-sm font-medium">295</span>
              </div>
              <X className="ml-2" />
            </div>
          </div>

          <div className="text-center text-3xl font-bold">
            Current bid : $45.00
          </div>

          <div className="flex items-end justify-center">
            <div className="flex-1 space-y-3">
              <div className="space-y-3.5">
                {msgs.map((msg) => (
                  <div className="flex items-center gap-2" key={msg.id}>
                    <Image
                      src={`https://i.pravatar.cc/${Math.floor(
                        Math.random() * 200
                      )}`}
                      alt={msg.name}
                      width={30}
                      height={30}
                      className="h-8 w-8 rounded-full border border-[#4693ED]"
                    />

                    <div className="flex flex-col text-sm">
                      <h2 className="font-medium">{msg.name}</h2>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="">
                <div className="relative">
                  <Input
                    placeholder="Join conversation..."
                    className="rounded-3xl border border-white placeholder:text-white"
                  />

                  <Send color="white" className="absolute right-4 top-2.5" />
                </div>
              </div>
            </div>

            <LiveReactions />
          </div>
        </div>
      </div>
      {/* mobile end */}

      <div className="hidden px-24 sm:block">
        <div className="flex min-h-screen flex-col gap-4">
          <Breadcrumb
            items={["Home", "Auctions", "Live bid"]}
            className="ml-6 mt-6"
          />

          <div className="grid flex-1 grid-cols-2 border border-black text-white">
            <div
              className="flex h-full flex-col justify-between bg-cover"
              style={{ backgroundImage: `url(${auction?.image})` }}
            >
              <div className="flex items-center justify-between px-4 pt-2">
                <div className="rounded-full bg-[#9A9D9E] p-1">
                  <X />
                </div>
                <div className="rounded-3xl bg-[#4693ED] px-4 py-px text-sm font-medium">
                  LIVE
                </div>
              </div>

              <div className="text-center text-4xl font-semibold">
                Current bid $4500
              </div>

              <div className="mb-6 ml-4 text-2xl">Tag: Lost or Wither</div>
            </div>

            <div className="flex items-end justify-center px-8 pb-4 text-black">
              <div className="flex-1 space-y-3">
                <div className="space-y-3.5">
                  {msgs.map((msg) => (
                    <div className="flex items-center gap-8" key={msg.id}>
                      <Image
                        src={`https://i.pravatar.cc/500?img=${msg.id}`}
                        alt={msg.name}
                        width={30}
                        height={30}
                        className="h-[70px] w-[70px] rounded-full border border-[#78A3AD] object-cover"
                      />

                      <div className="flex flex-col gap-2 text-lg">
                        <h2>{msg.name}</h2>
                        <p className="font-medium">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="my-4 text-lg font-medium italic text-[#BAB9B9]">
                    Creator : Stormi Rylie
                  </div>
                  <div className="relative">
                    <Input
                      placeholder="Place a bid..."
                      className="rounded-2xl border border-black py-6"
                    />

                    <Send className="absolute right-4 top-4" />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <LiveReactions h={300} w={150} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <h2 className="text-3xl font-medium">See upcoming drops</h2>
          <Link href="/drops">
            <CircledArrow fill="#616161" />
          </Link>
        </div>
      </div>
    </>
  );
}

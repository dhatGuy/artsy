import { ChevronDown } from "lucide-react";
import { Breadcrumb } from "~/components/ui";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const drops = [
  {
    id: 1,
    name: "Eyo: Eko For Show",
    image: "/images/ghost.jpg",
    creator: "Aliya Minat",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Ginger Suburbs",
    image: "/images/masood-aslami.jpg",
    creator: "Tina Benson",
    status: "Live Now",
  },
  {
    id: 3,
    name: "Sink",
    image: "/images/sink.jpg",
    creator: "Aliyah Minat",
    status: "Ended",
  },
  {
    id: 4,
    name: "Warped '99",
    image: "/images/bjorn-pierre.jpg",
    creator: "Tina Benson",
    status: "Ended",
  },
];

function Page() {
  return (
    <div className="mb-4 space-y-14 px-4 sm:px-20">
      <Breadcrumb items={["Home", "Auction", "Live bid", "Drop"]} />
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold text-[#000] sm:text-4xl">
          Upcoming drops
        </h2>
        <p className="mt-4 max-w-[25ch] text-lg text-gray sm:max-w-[40ch] sm:text-2xl">
          You may turn on notifications so that no drop will miss you.
        </p>
        <Button
          variant="outline"
          className="w-56 border-[#000] text-xl font-medium transition-colors duration-200 hover:bg-[#3341C1] hover:text-white sm:w-64 sm:py-8 sm:text-2xl"
        >
          Notify me
        </Button>
      </div>

      <div className="space-y-10">
        <div className="ml-auto flex w-fit items-center gap-3 sm:hidden">
          <span className="text-lg">Sort by</span>{" "}
          <ChevronDown strokeWidth={1} />
        </div>

        <div className="flex flex-col gap-14 sm:gap-24">
          {drops.map((drop) => (
            <div className="flex flex-col gap-7 sm:flex-row" key={drop.id}>
              <div
                className={cn(
                  "flex h-[224px] flex-col justify-between rounded-lg bg-black/20 bg-cover px-6 py-3.5 text-white",
                  "sm:h-[400px] sm:flex-1 sm:justify-end"
                )}
                style={{ backgroundImage: `url(${drop.image})` }}
              >
                <div
                  className={cn(
                    "ml-auto w-fit rounded-md px-4 py-1 text-xs font-medium uppercase sm:hidden",
                    {
                      "bg-[#4693ED]": drop.status === "Upcoming",
                      "bg-[#3EA03B]": drop.status === "Live Now",
                      "bg-[#999EA5]": drop.status === "Ended",
                    }
                  )}
                >
                  {drop.status}
                </div>
                <div
                  className={cn(
                    "flex flex-col gap-2 rounded-lg border border-white px-5 py-2 backdrop-blur-[1.5px]",
                    "bg-[linear-gradient(0deg,rgba(0,00,0.2),rgba(0,0,0,0.2)),rgba(245,244,244,0.24)]"
                  )}
                >
                  <span>
                    {drop.status === "Ended"
                      ? "Auction ended"
                      : drop.status === "Live Now"
                      ? "Auction ends in"
                      : "Auction starts in"}
                  </span>
                  <div className="flex items-center justify-between">
                    <time className="font-stix-two text-xl">
                      {drop.status === "Ended"
                        ? "5 days ago"
                        : drop.status === "Live Now"
                        ? "06  hrs : 45 min : 22 s"
                        : "11  hrs : 45 min : 22 s"}
                    </time>

                    <Button
                      className={cn(
                        "hidden rounded-2xl p-0 px-4 text-xl font-medium sm:block",
                        {
                          "bg-[#4693ED] hover:bg-[#3A7BC1]":
                            drop.status === "Upcoming" ||
                            drop.status === "Live Now",
                          "bg-[#999EA5] hover:bg-[#7D7F82]":
                            drop.status === "Ended",
                        }
                      )}
                    >
                      {drop.status === "Ended" ? "View" : "Join"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-1 sm:justify-between">
                <div
                  className={cn(
                    "hidden w-fit rounded-md px-8 py-2 text-xs font-medium uppercase text-white sm:flex",
                    {
                      "bg-[#4693ED]": drop.status === "Upcoming",
                      "bg-[#3EA03B]": drop.status === "Live Now",
                      "bg-[#999EA5]": drop.status === "Ended",
                    }
                  )}
                >
                  {drop.status}
                </div>
                <time className="sm:text-xl">November 21 at 11 am WAT</time>
                <h2 className="text-2xl font-medium sm:text-3xl">
                  {drop.name}
                </h2>
                <p className="text-sm text-gray sm:max-w-[40ch] sm:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  laboriosam officiis dolor cumque quod deleniti modi fugiat
                  itaque repellendus.
                </p>
                <div className="text-xl font-medium sm:text-2xl">
                  Creator:{" "}
                  <span className="text-[#006CA2]">{drop.creator}</span>
                </div>
                <div className="cursor-pointer text-[#006CA2] underline sm:text-xl">
                  {drop.status === "Ended"
                    ? "View"
                    : drop.status === "Live Now"
                    ? "Join Now"
                    : "Get notified"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;

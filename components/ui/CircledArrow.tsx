import { cn } from "~/lib/utils";

const CircledArrow = ({
  className,
  fill = "#fff",
}: {
  className?: string;
  fill?: string;
}) => (
  <div
    className={cn(
      "flex h-20 w-20 items-center justify-center rounded-full border",
      className
    )}
  >
    <svg
      width="40"
      height="27"
      viewBox="0 0 40 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.3736C0 12.9869 0.1505 12.616 0.418392 12.3426C0.686284 12.0692 1.04962 11.9155 1.42848 11.9155H35.1206L26.1298 2.74132C25.8615 2.46753 25.7108 2.0962 25.7108 1.709C25.7108 1.32181 25.8615 0.950472 26.1298 0.676684C26.398 0.402897 26.7618 0.249084 27.1411 0.249084C27.5205 0.249084 27.8843 0.402897 28.1525 0.676684L39.5803 12.3413C39.7134 12.4767 39.8189 12.6376 39.8909 12.8148C39.9629 12.9919 40 13.1818 40 13.3736C40 13.5654 39.9629 13.7553 39.8909 13.9325C39.8189 14.1096 39.7134 14.2705 39.5803 14.4059L28.1525 26.0706C27.8843 26.3443 27.5205 26.4982 27.1411 26.4982C26.7618 26.4982 26.398 26.3443 26.1298 26.0706C25.8615 25.7968 25.7108 25.4254 25.7108 25.0382C25.7108 24.651 25.8615 24.2797 26.1298 24.0059L35.1206 14.8317H1.42848C1.04962 14.8317 0.686284 14.6781 0.418392 14.4046C0.1505 14.1312 0 13.7603 0 13.3736Z"
        fill={fill}
      />
    </svg>
  </div>
);

export default CircledArrow;

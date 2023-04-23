import { cn } from "~/lib/utils";

function Breadcrumb({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-1 overflow-x-auto whitespace-nowrap py-2",
        className
      )}
    >
      {items.map((item, index) => (
        <a
          href="#"
          key={item}
          className={cn("font-medium", {
            "text-[#BCB7B7]": index < items.length - 1,
            "text-black cursor-default": index === items.length - 1,
          })}
        >
          <span className={cn({ "hover:underline": index < items.length - 1 })}>
            {item}
          </span>
          {index < items.length - 1 ? " / " : ""}
        </a>
      ))}
    </nav>
  );
}

export default Breadcrumb;

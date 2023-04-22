import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fetchMap = new Map<string, Promise<any>>();

export function queryClient(name: string, query: () => Promise<any>) {
  if (!fetchMap.has(name)) {
    fetchMap.set(name, query());
  }
  return fetchMap.get(name)!;
}

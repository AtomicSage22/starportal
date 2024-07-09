import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

let classNames = (...inputs: any) => {
  return twMerge(clsx(inputs));
};

const sliceText = (text: any, maxCharacters: any) => {
  if (text.length > maxCharacters) {
    return `${text.slice(0, maxCharacters - 3)}...`
  }

  return text
}

export { classNames,sliceText};
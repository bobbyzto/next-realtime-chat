import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
/*** function that enables conditional classnames based on state  ***/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
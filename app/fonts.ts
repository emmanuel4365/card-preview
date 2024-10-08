import { Inter, Fraunces, Montserrat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], display: "swap" });

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--fraunces-font",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat-font",
});

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata : Metadata = {
  title: "Next Project",
  description: "재밌게 공부하는 Next 16",

}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(pretendard.variable, "front-sana", Geist.variable)}>
      <body className="font-pretendard">
        {children}
      </body>
    </html>
  );
}

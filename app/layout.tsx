import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Dreamers Hub",
  description: "Welcome to Dreamers Hub, a platform for dreamers and innovators to connect and share ideas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "w-full", "antialiased", "font-sans", geist.variable)}
    >
      <body className="">{children}</body>
    </html>
  );
}

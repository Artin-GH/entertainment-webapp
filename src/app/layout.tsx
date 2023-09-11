import "tailwindcss/tailwind.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import ReduxProvider from "@/redux/ReduxProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertainment Web App",
  description:
    "This is a solution to the Entertainment web app challenge on Frontend Mentor.",
  icons: {
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

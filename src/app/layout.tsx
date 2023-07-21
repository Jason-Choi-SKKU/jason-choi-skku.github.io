import type { Metadata } from "next";
import Providers from "./providers";
import { Footer, Header } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Jiwon Choi",
  description: `Jiwon Choi's Personal Webpage`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
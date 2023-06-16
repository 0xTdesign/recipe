import Footer from "./Componets/Footer/Footer";
import Header from "./Componets/Header/Header";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SPICE BLOG",
  description: "Reicpe Blog",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

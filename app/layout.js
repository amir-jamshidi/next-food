import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "نکست فود | صفحه اصلی",
  description: "Online Food Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className="dark">
      <body className={`${inter.className} transition-colors bg-gray-100 dark:bg-gray-900`}>
        <Provider>
          <Header />
          <div className="container">
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

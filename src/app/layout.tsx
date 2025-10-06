import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        {/* ThemeProvider wraps everything that needs theme */}

        <Providers>
          <div className="flex-1 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

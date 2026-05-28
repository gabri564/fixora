import "./globals.css";

import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import FloatingMenu from "@/components/organisms/FloatingMenu";

export const metadata = {
  title: "FIXORA",
  description: "Smart Technology Solutions",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-background
          text-foreground
          antialiased
        "
      >
        {/* NAVBAR */}

        <Navbar />

        {/* MAIN CONTENT */}

        <main
          className="
            relative
            z-10
            flex
            min-h-screen
            flex-col
          "
        >
          {children}
        </main>

        {/* FLOATING MENU */}

        <FloatingMenu />

        {/* FOOTER */}

        <Footer />
      </body>
    </html>
  );
}
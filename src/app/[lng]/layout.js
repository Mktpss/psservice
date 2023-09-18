import "../globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { ThemeProvider } from "../providers/theme-provider";
import { Navbar } from "../components/Navbar";
import { Oxygen } from "next/font/google";
import { Footer } from "../components/Footer";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={`${oxygen.className} relative flex flex-col flex-nowrap min-h-screen dark:bg-gradient-to-r dark:from-[#1E3F88] dark:to-[#0F2044]`}
          >
            <Navbar lng={lng} />
            <div style={{ flex: 1 }}>{children}</div>
            <Footer lng={lng} />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

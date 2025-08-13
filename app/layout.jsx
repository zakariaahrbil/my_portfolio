import "./globals.css";
import localFont from "next/font/local";


export const metadata = {
  title: "Zalmoxis Portfolio",
  description: "Portfolio of Zakaria ahrbil",
};

const montserrat = localFont({
  src: [
    {
      path: "./fonts/montserrat/Montserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/montserrat/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/montserrat/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/montserrat/Montserrat-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({ children }) {
    



  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}

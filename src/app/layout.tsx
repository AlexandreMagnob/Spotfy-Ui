import "./globals.css";
import localfont from "next/font/local"

const circular =  localfont({
  src: [{
      path: "../../public/fonts/CircularStd-Book.otf",
      weight: "500",
    },
  ],
  variable: "--font-circular"
})

export const metadata = {
  title: "Spotfy",
  description: "Listen to music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${circular.variable} font-circular`}>
      <body className="bg-zinc-1000 text-zinc-50">{children}</body>
    </html>
  );
}

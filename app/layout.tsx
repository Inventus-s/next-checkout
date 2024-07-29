import { Container, Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import type { Metadata } from "next";
import { Inter, Poppins, } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin-ext"], weight: ['400', '800'], display: 'swap', });

export const metadata: Metadata = {
  title: "BrowCharm™ | Official Home of the Stencil Kit",
  description: "Created by Mukund Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Theme>
          <main>
            <NavBar brandLogo={"/images/icon/logo.png"} />
            <Container>
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}

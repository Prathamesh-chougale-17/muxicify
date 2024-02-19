import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "@/components/Header/HeaderMegaMenu";
import NavbarSpace from "@/components/NavbarSpace";
import Provider from "./Provider";
export const metadata: Metadata = {
  title: "Muxify",
  description: "Listen your own music online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <MantineProvider defaultColorScheme="dark">
            <HeaderMegaMenu />
            <NavbarSpace />
            {children}
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}

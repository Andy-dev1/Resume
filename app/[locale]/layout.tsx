import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

import { ReactNode } from "react";
import { notFound } from "next/navigation";
import NavBar from "../components/NavBar";

const openSans = Open_Sans({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ["en", "pt"].map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Andre Lemos",
  description: "Resume Website",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

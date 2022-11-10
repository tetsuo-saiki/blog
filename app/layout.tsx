import "./globals.css";

import { Footer } from "./components/layouts/Footer";
import { Header } from "./components/layouts/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main className="mx-auto min-h-[calc(100vh_-_145px)] w-full max-w-4xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

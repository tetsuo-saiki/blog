import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-white">
      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between">
        <Link href="/">LOGO</Link>
        <div>Link</div>
      </div>
    </header>
  );
};

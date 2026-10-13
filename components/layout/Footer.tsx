import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center item-center border-t border-white/10 px-6 py-8 text-center text-sm text-white/55 md:px-10">
      Copyright &copy; {new Date().getFullYear()}&nbsp;
      <Link
        href="https://kaghenijenner.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-white"
      >
        Kagheni Jenner
      </Link>
      . All rights reserved.
    </footer>
  );
}

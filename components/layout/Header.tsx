import Link from "next/link";
import Image from "next/image";
// import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Header() {
  // const t = useTranslations("Home");

  return (
    <div className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/40 px-6 py-4 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" width={44} height={44} alt="Logo" />
          <Link
            href="/"
            className="text-xl font-semibold tracking-wide text-white"
          >
            Check-In
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/login"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
          >
            Register
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

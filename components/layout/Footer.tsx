import { Link } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex justify-center item-center border-t border-white/10 px-6 py-8 text-center text-sm text-white/55 md:px-10">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <Link href="https://jennermaxim.com">Kagheni Jenner</Link>. All rights
      reserved.
    </div>
  );
}

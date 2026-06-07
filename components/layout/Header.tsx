import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div>Checkin-In</div>
      <div>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}

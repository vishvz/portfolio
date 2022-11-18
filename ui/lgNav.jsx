import Link from "next/link";

function LgNav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default LgNav;

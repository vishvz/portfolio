import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-900 mt-10">
      <div className="max-h-max py-6 mx-container flex justify-between">
        <h4>@ Vishvajeetsinh Zala</h4>
        <nav>
          <ul className="flex flex-wrap gap-12 justify-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

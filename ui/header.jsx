import SmNav from "./smNav";
import LgNav from "./lgNav";
import Logo from "./logo";
// import "../styles/header.css";

function Header() {
  return (
    <header className="bg-orange-300 mb-10">
      <div className="max-h-max flex justify-between py-6 md:items-center mx-container">
        <Logo />
        <LgNav />
        <SmNav />
      </div>
    </header>
  );
}

export default Header;

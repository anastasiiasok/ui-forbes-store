import MidHeader from "./MidHeader";
import TopHeader from "./TopHeader";
import NavHeader from "./NavHeader";
import SplineBlock from "./SplineBlock";
import "./_header.scss"

export default function Header() {

  return (
    <header className="header">
      <TopHeader />
      <MidHeader />
      <NavHeader />
      <SplineBlock />
    </header>
  );
}

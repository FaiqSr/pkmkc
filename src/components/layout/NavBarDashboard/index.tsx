import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";

const NavBarDashboard = () => {
  return (
    <header className="shadow">
      <section className="bg-white border-b border-slate-200">
        <TopNavBar />
      </section>
      <section className="bg-white">
        <BottomNavBar />
      </section>
    </header>
  );
};

export default NavBarDashboard;

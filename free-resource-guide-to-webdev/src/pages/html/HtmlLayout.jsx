import { NavLink, Outlet } from "react-router-dom"
export default function HtmlLayout() {
  const activeLink = {
    borderBottom: "2px solid #ef4444",
  };
  return (
    <section className="container mx-auto">
      <div className="">
        <div className="flex justify-evenly gap-10 mt-14 mb-5 uppercase text-[0.9rem] sm:text-[0.9rem] md:text-lg">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="text-center"
          >
            <h1 className="">Text-based</h1>
          </NavLink>
          <div className="h-5 border-r border-slate-200"></div>
          <NavLink
            to="videohtml"
            style={({ isActive }) => (isActive ? activeLink : null)}
            className="text-center"
          >
            <h1 className="">Video-based</h1>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
}
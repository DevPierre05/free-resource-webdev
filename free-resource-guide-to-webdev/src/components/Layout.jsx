import { Outlet, Link } from "react-router-dom"
import Arrow from "../assets/left-arrow.png"
import Footer from "./Footer"
export default function Layout() {
  return (
    <section className="">
      <div className="relative container mx-auto min-h-screen px-2 overflow-x-hidden">
        <Link
          to="/"
          className="flex gap-2 items-center mt-5 sm:mt-10 mb-10 p-1 w-[10rem] cursor-pointer hover:font-medium"
        >
          <img src={Arrow} alt="image of arrow left" className="w-[25px]" />
          <h1 className="text-md">Main Menu</h1>
        </Link>
        <Outlet />
        <Footer />
      </div>
    </section>
  );
}
      
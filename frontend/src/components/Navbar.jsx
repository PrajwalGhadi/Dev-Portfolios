import Button from "./utils/Button";
import { navbar } from "../../constants/Landing";
import { Link, Links, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="fixed z-10 w-screen bg-black flex justify-between items-center py-3 px-4 lg:px-20 shadow-[#3b5a54] shadow-lg backdrop-blur-2xl">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo text-neon font-sans font-bold text-2xl">
          {navbar.logo}
        </NavLink>

        {/* Links */}
        <ul className="hidden navbar-links text-terminal-zinc-400 text-lg lg:flex justify-between gap-8">
          {navbar.links.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive, isPending }) =>
                isActive ? "text-neon border-b font-black transition-all duration-200" : "hover:text-neon hover:border px-2 hover:rounded-md transition-all duration-200"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* SignUp Button */}
        <div className="flex gap-2">
          <Button text="Sign In" color="border border-neon text-white" />
          <Button text="Sign Up" color="bg-neon" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

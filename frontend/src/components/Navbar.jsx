import Button from "./utils/Button";
import { navbar } from "../../constants/Landing";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navItems = ['handshake', 'Secure_Tunnel', 'Latency'];

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const { user } = useAuth();

  const isAuthPage = path === "/auth/signin" || path === "/auth/signup";

  console.log(user)

  return (
    <>
      {isAuthPage ? (
        <nav className="fixed z-10 w-screen bg-black flex justify-between items-center py-3 px-4 lg:px-20 shadow-[#3b5a54] shadow-lg backdrop-blur-2xl">
          {/* Logo */}
          <NavLink
            to="/"
            className="navbar-logo text-neon font-sans font-bold text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl"
          >
            {navbar.logo}
          </NavLink>

          <div className="flex justify-between gap-1 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 uppercase">
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center gap-1 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <h1 className="text-neon text-xs sm-text-xs md:text-sm lg:text-md xl:text-lg">
                  {item}
                </h1>{" "}
                {index !== -1 && index !== navItems.length - 1 && (
                  <span className="text-neon text-xs sm-text-xs md:text-sm lg:text-md xl:text-lg">|</span>
                )}
              </div>
            ))}
          </div>
          <div></div>
        </nav>
      ) : (
        <nav className="fixed z-10 w-screen bg-black flex justify-between items-center py-3 px-4 lg:px-20 shadow-[#3b5a54] shadow-lg backdrop-blur-2xl">
          {/* Logo */}
          <NavLink
            to="/"
            className="navbar-logo text-neon font-sans font-bold text-2xl"
          >
            {navbar.logo}
          </NavLink>

          {/* Links */}
          <ul className="hidden navbar-links text-terminal-zinc-400 text-lg lg:flex justify-between gap-8">
            {navbar.links.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-neon border-b font-black transition-all duration-200"
                    : "hover:text-neon hover:border px-2 hover:rounded-md transition-all duration-200"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>

          {/* SignUp Button */}
          
          {!user ? <div className="flex gap-2">
            <Button
              text="Sign In"
              color="border border-neon text-white"
              path="/auth/signin"
            />
            <Button text="Sign Up" color="bg-neon" path="/auth/signup" />
          </div> : null}
          
        </nav>
      )}
    </>
  );
};

export default Navbar;

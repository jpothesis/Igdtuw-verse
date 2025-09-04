import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Explore", to: "/explore" },
    { name: "Contact Us", to: "/contact us" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-white/20 backdrop-blur-2xl shadow-md"
                    : "py-5 bg-white/10 backdrop-blur-2xl"
            )}
        >

            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-20">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <span className="text-2xl font-bold text-foreground">
                        IGDTUW_Verse
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-12 font-semibold tracking-wide uppercase">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.to}
                            className="text-foreground/80 hover:text-purple-600 transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-3">
                    <Link
                        to="/login"
                        className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-5 py-2 rounded-full font-semibold hover:from-purple-400 hover:to-purple-600 transition"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/register"
                        className="bg-gradient-to-r from-purple-600 to-purple-800 py-2 px-4 rounded-full font-semibold text-white hover:from-purple-500 hover:to-purple-700 transition"
                    >
                        Create an Account
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                <div
                    className={cn(
                        "fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.to}
                                className="text-foreground/80 hover:text-purple-600 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/login"
                            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white mt-4 py-2 px-6 rounded-full hover:from-purple-400 hover:to-purple-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/register"
                            className="bg-gradient-to-r from-purple-600 to-purple-800 py-2 px-6 rounded-full font-semibold text-white hover:from-purple-500 hover:to-purple-700 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Create an Account
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

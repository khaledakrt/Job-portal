// components/Navbar.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  // Vérifie si l'utilisateur est connecté
  const checkUser = () => {
    if (typeof window === "undefined") return;
    const user = localStorage.getItem("user");
    setIsLogged(!!user);
  };

  useEffect(() => {
    checkUser();
    const onAuthChange = () => checkUser();
    window.addEventListener("authChange", onAuthChange);
    return () => window.removeEventListener("authChange", onAuthChange);
  }, [router.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange"));
    router.push("/login");
  };

  const guestLinks = [
    { href: "/", label: "Accueil" },
    { href: "/jobs", label: "Offres" },
    { href: "/register", label: "S'inscrire" },
    { href: "/login", label: "Connexion" },
  ];

  const authLinks = [
    { href: "/", label: "Accueil" },
    { href: "/jobs", label: "Offres" },
    { href: "/profile", label: "Profil" },
  ];

  const links = isLogged ? authLinks : guestLinks;

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold hover:text-yellow transition">
            JobPortal
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-yellow transition ${router.pathname === link.href ? "underline" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            {isLogged && (
              <button onClick={handleLogout} className="ml-4 hover:text-yellow">
                Déconnexion
              </button>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsLogged(!isLogged)} className="text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

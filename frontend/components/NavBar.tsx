// components/Navbar.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState<"recruiter" | "candidate" | null>(null);

  const checkUser = () => {
    if (typeof window === "undefined") return;
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setIsLogged(true);
      // Assurer que role est bien défini
      setUserRole(user.role === "recruiter" ? "recruiter" : "candidate");
    } else {
      setIsLogged(false);
      setUserRole(null);
    }
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
    router.push("/auth/login");
  };

  const guestLinks = [
    { href: "/", label: "Accueil" },
    { href: "/jobs", label: "Offres" },
    { href: "/auth/register", label: "S'inscrire" },
    { href: "/auth/login", label: "Connexion" },
  ];

  const authLinks = [
    { href: "/", label: "Accueil" },
    { href: "/jobs", label: "Offres" },
  ];

  // Ajouter le bon lien Profil selon le rôle
  if (isLogged) {
    if (userRole === "recruiter") {
      authLinks.push({ href: "/recruiter/RecruiterDashboard", label: "Profil" });
    } else {
      authLinks.push({ href: "/candidate/profile", label: "Profil" });
    }
  }

  const links = isLogged ? authLinks : guestLinks;

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold hover:text-yellow transition">
            JobPortal
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-yellow transition ${
                  router.pathname === link.href ? "underline" : ""
                }`}
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
              ☰
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2 px-4 pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-yellow"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {isLogged && (
              <button onClick={handleLogout} className="hover:text-yellow mt-2">
                Déconnexion
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

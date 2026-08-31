// import { cn } from "@/lib/utils"
// import { buttonVariants } from "@/components/ui/button"
// import { GithubIcon } from "./icons/Githubicon"
// import Link from "next/link"
// import { LinkedinIcon } from "./icons/Linkedinicon"

// export default function Header (){

//     return (
//         <header className="top-0 py-4">
//             <div className="flex items-baseline max-w-5xl px-4 m-auto ">
//                 <Link
//                 // en attente de redirection personnaliser
//                     href="/"
//                     className="text-xl font-bold text-primary"
//                     aria-label="Accueil - Thibaut Denis"
//                 >
//                     Denis Thibaut
//                 </Link>
//                 <nav className="flex flex-1 justify-end">
//                     <ul className="flex items-center gap-2">
//                         <li>
//                             <Link 
//                                 href="https://github.com/ThibautTobi"
//                                 aria-label="GitHub"
//                                 className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
//                             >
//                             <GithubIcon size={12} className="text-foreground"/> 
//                             </Link>
//                         </li>
//                         <li>
//                             <Link 
//                                 href="https://www.linkedin.com/in/denis-thibaut-développeur/"
//                                 aria-label="Linkedin"
//                                 className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
//                             >
//                             <LinkedinIcon size={12} className="text-foreground"/> 
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     )
// }
"use client";

// import {
//     Menu,
//     X,
// } from "lucide-react";

import { useState } from "react";
import { GithubIcon } from "./icons/Githubicon";
import { LinkedinIcon } from "./icons/Linkedinicon";
/**
 * Navigation principale du portfolio.
 *
 * Les href correspondent directement aux IDs
 * présents sur les différentes sections.
 */
const navigation = [
    {
        label: "Accueil",
        href: "#home",
    },
    {
        label: "À propos",
        href: "#about",
    },
    {
        label: "Compétences",
        href: "#skills",
    },
    {
        label: "Projets",
        href: "#projects",
    },
    {
        label: "Parcours",
        href: "#career",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

/**
 * Header principal.
 *
 * Le composant reste Client Component car le menu mobile
 * utilise un état React.
 */
export default function Header (){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /**
     * Ferme le menu mobile lorsqu'un lien est sélectionné.
     */
    const handleNavigation = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="flex items-center justify-between max-w-6xl px-4 mx-auto h-16">

                <a
                    href="#home"
                    aria-label="Retour à l'accueil"
                    className="font-semibold"
                >
                    Denis Thibaut
                </a>

                {/* NAVIGATION DESKTOP */}

                <nav
                    aria-label="Navigation principale"
                    className="hidden md:block"
                >
                    <ul className="flex items-center gap-6">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="block py-3 text-primary transition-colors hover:text-muted-foreground duration-300 ease-out"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* LIENS EXTERNES DESKTOP */}

                <div className="hidden md:flex items-center gap-3">

                    <a
                        href="https://github.com/ThibautTobi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Voir mon profil GitHub"
                    >
                        <GithubIcon size={30} className="transition-transform duration-300 hover:scale-110"/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/denis-thibaut-développeur/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Voir mon profil LinkedIn"
                    >
                        <LinkedinIcon size={30} className="transition-transform duration-300 hover:scale-110"/>
                    </a>

                </div>

                {/* BOUTON MENU MOBILE */}

                {/* <button
                    type="button"
                    className="md:hidden"
                    aria-label={
                        isMenuOpen
                            ? "Fermer le menu"
                            : "Ouvrir le menu"
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? (
                        <X
                            aria-hidden="true"
                            className="w-6 h-6"
                        />
                    ) : (
                        <Menu
                            aria-hidden="true"
                            className="w-6 h-6"
                        />
                    )}
                </button> */}

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center gap-1.5"
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span
                        className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-500 ease-out ${
                            isMenuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-500 ease-out ${
                            isMenuOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-500 ease-out ${
                            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>

            </div>

            {/* NAVIGATION MOBILE */}

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    aria-label="Navigation mobile"
                    className="border-t md:hidden"
                >
                    <ul className="flex flex-col px-4 py-4">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={handleNavigation}
                                    className="block py-3 text-primary transition-colors hover:text-muted-foreground duration-300 ease-out"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Liens sociaux mobile */}
                    <div className="flex gap-4 px-4 pb-5">

                        <a
                            href="https://github.com/ThibautTobi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Voir mon profil GitHub"
                        >
                            <GithubIcon size={30} className="transition-transform duration-300 hover:scale-110"/> 
                        </a>

                        <a
                            href="https://www.linkedin.com/in/denis-thibaut-développeur/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Voir mon profil LinkedIn"
                        >
                            <LinkedinIcon size={30} className="transition-transform duration-300 hover:scale-110"/> 
                        </a>

                    </div>
                </nav>
            )}
        </header>
    );
};
import { GithubIcon } from "./icons/Githubicon";
import { LinkedinIcon } from "./icons/Linkedinicon";

/**
 * Footer du portfolio.
 *
 * Il reprend les informations essentielles sans surcharger
 * la fin de la page.
 */
export default function Footer () {
    return (
        <footer className="border-t">
            <div className="flex flex-col gap-6 max-w-6xl px-4 py-8 mx-auto">

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                {/* IDENTITÉ */}

                    <div className="text-center sm:text-left">
                        <p className="font-semibold">
                            Denis Thibaut
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Développeur Web Junior — Front-End / Full Stack
                        </p>
                    </div>

                {/* RÉSEAUX */}

                    <div className="flex flex-row items-center gap-4">

                        <a
                            href="https://github.com/ThibautTobi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <GithubIcon size={30} className="transition-transform duration-300 hover:scale-110"/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/thibaut-denis-2b12b21b1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon size={30} className="transition-transform duration-300 hover:scale-110"/>
                        </a>

                    </div>
                </div>

                {/* COPYRIGHT */}

                <p className="text-sm text-accents text-center border-t pt-4">
                    © {new Date().getFullYear()} Denis Thibaut
                </p>

            </div>
        </footer>
    );
};
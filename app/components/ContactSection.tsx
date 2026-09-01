import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons/Linkedinicon";
import { GithubIcon } from "./icons/Githubicon";

/**
 * Section Contact.
 *
 * Objectif :
 * transformer le contact en véritable appel à l'action
 * pour un recruteur ou une entreprise.
 */

export default function ContactSection (){

    return (

        <section
            id="contact"
            aria-labelledby="contact-title"
            className="max-w-5xl px-4 py-16 mx-auto"
        >
            <div className="max-w-3xl mx-auto text-center">

                {/* TITRE */}

                <h2
                    id="contact-title"
                    className="mt-2 text-3xl font-bold md:text-4xl"
                >
                    Parlons de votre prochain projet
                </h2>

                <p className="mt-5 leading-7 text-muted-foreground">
                    Je recherche actuellement un CDI en tant que développeur
                    web junior, principalement orienté Front-End ou Full
                    Stack.
                </p>

                {/* DISPONIBILITÉ */}

                <div className="grid gap-4 mt-8 sm:grid-cols-3">

                    <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Contrat recherché
                        </p>

                        <p className="mt-1 font-semibold">
                            CDI
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Localisation
                        </p>

                        <p className="mt-1 font-semibold">
                            Rouen et alentours
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Télétravail
                        </p>

                        <p className="mt-1 font-semibold">
                            100 % remote privilégié
                        </p>
                    </div>

                </div>

                {/* LIENS */}

                <div className="flex flex-wrap justify-center gap-3 mt-10">

                    {/* Email */}
                    <a
                        href="mailto:thibaut.denis.developpeur@gmail.com"
                        className="inline-flex items-center justify-center gap-4 rounded-md px-5 py-3 font-medium border-2 hover:bg-accent transition-colors"
                    >
                        <Mail
                            aria-hidden="true"
                            className="w-8 h-8 transition-transform duration-300 hover:scale-110"
                        />

                        Me contacter
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/ThibautTobi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-4 rounded-md px-5 py-3 font-medium border-2 hover:bg-accent transition-colors"
                    >
                    <GithubIcon size={30} className="transition-transform duration-300 hover:scale-110"/>
                        GitHub
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/thibaut-denis-2b12b21b1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-4 rounded-md px-5 py-3 font-medium border-2 hover:bg-accent transition-colors"
                    >
                    <LinkedinIcon size={30} className="transition-transform duration-300 hover:scale-110"/>

                        LinkedIn
                    </a>

                </div>
            </div>
        </section>
    )
}
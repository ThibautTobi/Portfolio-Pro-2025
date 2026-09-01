import {
    ExternalLink,
    Github,
    GitCompareArrows,
} from "lucide-react";

/**
 * Type utilisé pour chaque projet.
 *
 * On remplace les anciens booléens :
 * - formation
 * - fin
 * - nonfini
 *
 * par des valeurs beaucoup plus explicites.
 */

type SideProjectProps = {
    title: string;

    /**
     * Description courte du projet.
     */
    description: string;

    /**
     * Technologies réellement utilisées dans le projet.
     */
    technologies: string[];

    /**
     * Lien vers le repository GitHub.
     */
    url: string;

    /**
     * Lien vers le site lorsqu'il existe.
     */
    site?: string;

    /**
     * Origine du projet.
     */
    type: "Personnel" | "Formation";

    /**
     * État actuel du projet.
     */
    status: "Terminé" | "En cours";
};

/**
 * Projets affichés sur le portfolio.
 *
 * IMPORTANT :
 * Ne mets ici que des projets que tu peux réellement présenter
 * pendant un entretien.
 *
 * Tu peux conserver les autres projets sur GitHub sans forcément
 * les afficher sur ton portfolio.
 */

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        title: "LT Coaching V1",

        description:
            "Site vitrine développé avec Next.js et TypeScript pour présenter une activité de coaching sportif, structurer les différentes offres et proposer une expérience responsive adaptée aux utilisateurs.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],

        url: "https://github.com/ThibautTobi/LTcoaching",

        site: "https://lt-coaching.vercel.app/",

        type: "Personnel",

        status: "Terminé",
    },

    // {
    //     title: "LT Coaching V2",

    //     description:
    //         "Évolution du projet LT Coaching avec l'objectif d'intégrer progressivement de nouvelles fonctionnalités et une architecture plus complète.",

    //     technologies: [
    //         "Next.js",
    //         "TypeScript",
    //     ],

    //     url: "https://github.com/ThibautTobi/LTcoachingv2",

    //     type: "Personnel",

    //     status: "En cours",
    // },

    {
        title: "Portfolio",

        description:
            "Portfolio développé avec Next.js et TypeScript pour présenter mon parcours, mes compétences et mes projets. Le projet met également l'accent sur le responsive design, l'accessibilité, le SEO et la qualité du code.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],

        url: "https://github.com/ThibautTobi/Portfolio-Pro-2025",

        type: "Personnel",

        status: "En cours",
    },

    {
        title: "Mon Vieux Grimoire",

        description:
            "Projet de formation consacré au développement d'une API permettant de gérer une application de partage de livres.",

        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "API REST",
        ],

        url: "https://github.com/ThibautTobi/P7-Back-End-Mon-Vieux-Grimoire",

        type: "Formation",

        status: "Terminé",
    },

    {
        title: "Nina Carducci",

        description:
            "Projet d'optimisation d'un site avec un travail autour des performances, du référencement et de l'accessibilité.",

        technologies: [
            "SEO",
            "Performance",
            "Accessibilité",
        ],

        url: "https://github.com/ThibautTobi/P5_Nina_Carducci",

        type: "Formation",

        status: "Terminé",
    },
];

/*** Section des projets. */

export default function SideProjectSection (){

return (

    <section
            id="projects"
            aria-labelledby="projects-title"
            className="max-w-5xl px-4 py-16 mx-auto"
        >
            {/* INTRODUCTION */}

            <div className="max-w-3xl mx-auto text-center">

                <h2
                    id="projects-title"
                    className="mt-2 text-3xl font-bold md:text-4xl"
                >
                    Projets sélectionnés
                </h2>

                <p className="mt-4 leading-7 text-muted-foreground">
                    Une sélection de projets personnels et de formation
                    illustrant mon évolution et mes compétences en
                    développement web.
                </p>
            </div>

            {/* LISTE DES PROJETS */}

            <div className="grid gap-6 mt-10 md:grid-cols-2">
                {SIDE_PROJECTS.map((project) => (
                    <article
                        key={project.title}
                        className="flex flex-col p-6 border rounded-xl"
                    >
                        {/* EN-TÊTE */}

                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div
                                    aria-hidden="true"
                                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted"
                                >
                                    <GitCompareArrows className="w-5 h-5" />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase text-muted-foreground">
                                        {project.type}
                                    </p>

                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Statut du projet */}
                            <span className="text-xs whitespace-nowrap">
                                {project.status}
                            </span>
                        </div>

                        {/* DESCRIPTION */}

                        <p className="mt-5 leading-7 text-muted-foreground">
                            {project.description}
                        </p>

                        {/* TECHNOLOGIES */}

                        <div className="mt-5">
                            <h4 className="text-sm font-semibold">
                                Technologies
                            </h4>

                            <ul
                                aria-label={`Technologies utilisées pour ${project.title}`}
                                className="flex flex-wrap gap-2 mt-3"
                            >
                                {project.technologies.map((technology) => (
                                    <li
                                        key={technology}
                                        className="px-2.5 py-1 text-xs border rounded-full"
                                    >
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* LIENS */}

                        <div className="flex flex-wrap gap-3 mt-auto pt-6">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Voir le code source de ${project.title} sur GitHub`}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-md hover:bg-muted transition-colors"
                            >
                                <Github
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                />

                                Code source
                            </a>

                            {project.site && (
                                <a
                                    href={project.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Voir le site de ${project.title}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                                >
                                    <ExternalLink
                                        aria-hidden="true"
                                        className="w-4 h-4"
                                    />

                                    Voir le site
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            {/* GITHUB */}

            <div className="mt-10 text-center">
                <p className="text-sm text-muted-foreground">
                    D&apos;autres projets sont disponibles sur mon GitHub.
                </p>

                <a
                    href="https://github.com/ThibautTobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 font-bold hover:underline"
                >
                    <Github
                        aria-hidden="true"
                        className="w-8 h-8"
                    />

                    Voir mon GitHub
                </a>
            </div>
        </section>

        );
};
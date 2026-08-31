//"use client"

// import { LucideIcon,GitCompareArrows,MoveRight } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
//import { Badge } from "@/components/ui/badge";
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
            "Site vitrine développé pour présenter une activité de coaching sportif.",

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

    {
        title: "LT Coaching V2",

        description:
            "Évolution du projet LT Coaching avec l'objectif d'intégrer progressivement de nouvelles fonctionnalités et une architecture plus complète.",

        technologies: [
            "Next.js",
            "TypeScript",
        ],

        /**
         * ⚠️ Remplace cette URL par le véritable repository
         * de ta V2 si elle possède déjà son propre repository.
         *
         * Si ce n'est pas encore le cas, supprime simplement
         * ce projet temporairement de la liste.
         */
        url: "https://github.com/ThibautTobi/LTcoaching",

        type: "Personnel",

        status: "En cours",
    },

    {
        title: "Portfolio",

        description:
            "Portfolio personnel développé pour présenter mon profil, mes compétences, mes projets et mon parcours.",

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

                {/* <Badge variant={"outline"} className="text-xl text-primary m-8 border-4" >
                    Projets
                </Badge> */}

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

/********** ancienne version */

//     const [visibleProjects,setVisibleProjetcs] = useState(2);

//     const showMoreProjects = () => {
//         setVisibleProjetcs(prev => Math.min(prev + 2, SIDE_PROJECTS.length));
//     };

//     const showLessProjects = () => {
//         setVisibleProjetcs(prev => Math.max(prev -2 , 2));
//     };
    
//     return (
//         <>
//             <Card className="flex flex-[2] flex-col p-4 gap-2">
//                 <h3 className="text-2xl p-2">Projects et fun Projects </h3>   
//                 <div className="flex flex-col gap-4">
//                     {SIDE_PROJECTS.slice(0, visibleProjects).map((projets,index) => 
//                     <SideProject 
//                         key={index}
//                         {...projets}/>
//                     )}
//                 </div>
//                 {/* Boutons Voir Plus / Voir Moins */}
//                 <div className="mt-4 flex flex-row items-center justify-center gap-2">
//                     {visibleProjects < SIDE_PROJECTS.length && (
//                         <Button
//                             onClick={showMoreProjects}
//                             className="p-2"
//                             variant="outline"
//                         >
//                             Voir plus
//                         </Button>
//                     )}
//                     {visibleProjects > 2 && (
//                         <Button
//                             onClick={showLessProjects}
//                             className="p-2"
//                             variant="outline"
//                         >
//                             Voir moins
//                         </Button>
//                     )}
//                 </div>
//             </Card>
//         </>
//     )
// }

// export type SideProjectProps = {
//     Logo : LucideIcon;
//     title : string ;
//     description : string;
//     site? : string;
//     url : string;
//     formation : boolean;
//     fin : boolean;
//     nonfini : boolean;
// }

// export function SideProject  ( props : SideProjectProps) {

//     return (
//         <div className="relative inline-flex hover:rounded-lg gap-4 p-2 hover:bg-accent/30 transition-colors group w-full flex-col">
//                 <div className="flex flex-row items-center">
//                     <span className="bg-accent text-accent-foreground p-4 mr-3 rounded-sm">
//                         <props.Logo size={16}/>
//                     </span>
//                     <div className="max-w-56">
//                         <p className="text-lg font-semibold">{props.title}</p>
//                         <p className="text-sm text-muted-foreground">{props.description}</p>
//                     </div>
//                 </div>

//                 {/* Lien vers GitHub + Lien vers le site si dispo */}
//                 <div className="flex gap-4 px-2 mt-2">
//                     <Link
//                     href={props.url}
//                     target="_blank"
//                     className="text-sm hover:underline"
//                     >
//                         <Button size="sm" variant="outline">Code GitHub</Button>
//                     </Link>
//                     {props.site && (
//                     <Link
//                         href={props.site}
//                         target="_blank"
//                         className="text-sm hover:underline"
//                     >
//                         <Button size="sm" variant="outline">Site Web</Button>
//                     </Link>
//                     )}
//                 </div>

//                 <div className="flex flex-row justify-between">
//                     <div className="top-2 right-2">
//                         {props.formation && (
//                             <Badge variant="outline" className="border-4 m-2">Formation</Badge>
//                         )}
//                         {props.fin && (
//                             <Badge variant="outline" className="border-4 m-2">Fini</Badge>
//                         )}
//                         {props.nonfini && (
//                             <Badge variant="outline" className="border-4 m-2">Non Fini</Badge>
//                         )}
//                     </div>
//                     <div className="top-1/2 group-hover:translate-x-2 group-hover:translate-y-1 transition-transform mr-2">
//                         <MoveRight />
//                     </div>
//                 </div>
//         </div>
//     )
// }

// export const SIDE_PROJECTS : SideProjectProps[] = [
//             {
//         Logo : GitCompareArrows,
//         title : "LT coaching V2",
//         description : " création site vitrine services sportifs TypeScript Next Js",
//         url : "https://github.com/ThibautTobi/LTcoaching-V2",
//         site : "",
//         formation : false,
//         fin : false,
//         nonfini : true,
//     },
//         {
//         Logo : GitCompareArrows,
//         title : "LT coaching V1",
//         description : " création site vitrine services sportifs TypeScript Next Js",
//         url : "https://github.com/ThibautTobi/LTcoaching",
//         site : "https://lt-coaching.vercel.app/",
//         formation : false,
//         fin : true,
//         nonfini : false,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project Portfolio actuel",
//         description : " création portfolio TypeScript Next Js",
//         url : "https://github.com/ThibautTobi/Portfolio-Pro-2025",
//         site : "",
//         formation : false,
//         fin : true,
//         nonfini : false,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project Portfolio 2",
//         description : " création deuxiéme portfolio ",
//         url : "https://github.com/ThibautTobi/photo-web-site",
//         site : "https://www.denis-thibaut.com/",
//         formation : false,
//         fin : true,
//         nonfini : false,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project Personnel",
//         description : " création site photographe en Next Js / Node Js avec gestion client , commande , sélection et recuperation photos",
//         url : "https://github.com/ThibautTobi/photo-web-site",
//         formation : false,
//         fin : false,
//         nonfini : true,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project Personnel",
//         description : " création site e-commerce react / Node Js avec systéme de paiements",
//         url : "https://github.com/ThibautTobi/photo-web-site",
//         formation : false,
//         fin : false,
//         nonfini : true,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project Premier Portfolio",
//         description : "création de mon premier portfolio ",
//         site : "https://thibauttobi.github.io/Portfolio-Thibaut/",
//         url : "https://github.com/ThibautTobi/Portfolio-Thibaut",
//         formation : false ,
//         fin : true,
//         nonfini : false,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project 7 : Back-End-Mon-Vieux-Grimoire",
//         description : " création du Back end en Node Js",
//         url : "https://github.com/ThibautTobi/P7-Back-End-Mon-Vieux-Grimoire",
//         formation : true,
//         fin : true,
//         nonfini : false,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project 6 Site Kasa Location immobilière",
//         description : "création Page React",
//         url : "https://github.com/ThibautTobi/P6_Site_Kasa_Location_immobiliere",
//         formation : true,
//         fin : true,
//         nonfini : false,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project 5 : Nina Carducci",
//         description : "optimisation et référencement de la page web",
//         url : "https://github.com/ThibautTobi/P5_Nina_Carducci",
//         formation : true,
//         fin : true,
//         nonfini : false,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project 3 : Portfolio architecte sophie bluel",
//         description : "intégration du javascript",
//         url : "https://github.com/ThibautTobi/Projet_3_Portfolio-architecte-sophie-bluel",
//         formation : true,
//         fin : true,
//         nonfini : false,
//     },
//     {
//         Logo : GitCompareArrows,
//         title : "Project 2 : Booki",
//         description : " création responsive de la page HTML",
//         url : "https://github.com/ThibautTobi/Projet_2",
//         formation : true,
//         fin : true,
//         nonfini : false,
//     },
// ]
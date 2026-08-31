//import { Badge } from "@/components/ui/badge";
import {
    Lightbulb,
    RefreshCw,
    Puzzle,
    Users,
} from "lucide-react";

/**
 * Liste des qualités professionnelles.
 *
 * Nous les définissons dans une constante afin de pouvoir
 * facilement modifier ou ajouter une qualité sans modifier
 * toute la structure JSX.
 */
const qualities = [
    {
        icon: Lightbulb,
        title: "Autonomie",
        description:
            "Je sais rechercher, apprendre et avancer de manière autonome face à une problématique technique.",
    },
    {
        icon: RefreshCw,
        title: "Adaptabilité",
        description:
            "Je m'adapte rapidement à de nouveaux outils, frameworks et besoins au cours d'un projet.",
    },
    {
        icon: Puzzle,
        title: "Résolution de problèmes",
        description:
            "J'aime comprendre l'origine d'un problème et rechercher une solution adaptée plutôt que simplement contourner la difficulté.",
    },
    {
        icon: Users,
        title: "Travail d'équipe",
        description:
            "J'apprécie la collaboration, le partage de connaissances et la contribution à un objectif commun.",
    },
];

/**
 * Section À propos.
 *
 * Cette section doit compléter le Hero :
 * - Hero = présentation très rapide ;
 * - About = personnalité, méthode de travail et recherche.
 */
export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="max-w-5xl px-4 py-16 mx-auto"
        >
            {/*  TITRE DE SECTION */}
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-center">
                    {/* <Badge variant={"outline"} className="text-xl text-primary m-8 text-center border-4" >
                        À propos
                    </Badge> */}
                </div>

                <p className="text-primary font-bold text-lg mb-4">
                    À propos
                </p>

                <h2
                    id="about-title"
                    className="mt-2 text-3xl font-bold md:text-4xl"
                >
                    Développeur web junior passionné par la création
                </h2>
            
                {/* PRÉSENTATION */}
                <div className="mt-6 space-y-4 text-base leading-7">
                    <p>
                        Je suis Denis Thibaut, développeur web junior
                        passionné par le numérique, le développement web et
                        les nouvelles technologies.
                    </p>

                    <p>
                        J&apos;aime transformer une idée en solution concrète,
                        concevoir des interfaces web et rechercher des
                        solutions aux problèmes techniques rencontrés au cours
                        d&apos;un projet.
                    </p>

                    <p>
                        Mon parcours m&apos;a permis de développer un socle en
                        HTML, CSS, JavaScript, React, Next.js et TypeScript.
                        Je continue aujourd&apos;hui à approfondir mes
                        compétences en développant mes propres projets et en
                        explorant de nouvelles technologies.
                    </p>

                    <p>
                        Autonome et autodidacte, j&apos;apprécie également le
                        travail en équipe. Je m&apos;adapte rapidement aux
                        besoins d&apos;un projet et j&apos;aime comprendre
                        l&apos;origine d&apos;un problème avant de rechercher
                        la solution la plus adaptée.
                    </p>

                    {/* 
                        Petite touche personnelle inspirée de ce que tu
                        m'as expliqué sur ton rapport à la construction
                        et aux LEGO.
                    */}
                    <p>
                        J&apos;aime construire, comprendre comment les
                        éléments fonctionnent ensemble et chercher à améliorer
                        ce que je crée. Aujourd&apos;hui, je retrouve cette
                        logique dans le développement web.
                    </p>
                </div>
            </div>

            {/* QUALITÉS */}
            <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                {qualities.map((quality) => {
                    const Icon = quality.icon;

                    return (
                        <article
                            key={quality.title}
                            className="p-5 border rounded-lg"
                        >
                            <Icon
                                aria-hidden="true"
                                className="w-6 h-6 text-primary"
                            />

                            <h3 className="mt-4 text-lg font-semibold">
                                {quality.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6">
                                {quality.description}
                            </p>
                        </article>
                    );
                })}
            </div>

            {/* RECHERCHE CDI */}
            <div className="mt-10 p-6 border rounded-lg">
                <h3 className="text-xl font-semibold">
                    Ce que je recherche
                </h3>

                <p className="mt-3 leading-7">
                    Je recherche actuellement un CDI en tant que développeur
                    web junior, avec une préférence pour des missions
                    Front-End ou Full Stack. Je reste ouvert à différents
                    environnements techniques et à l&apos;apprentissage de
                    nouveaux frameworks.
                </p>
            </div>
        </section>
    );
}
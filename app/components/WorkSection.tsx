/**
 * Section Parcours.
 *
 * Cette section permet de présenter rapidement :
 * - ta formation de développeur web ;
 * - tes projets personnels ;
 * - ton expérience professionnelle actuelle ;
 * - ta transition vers le développement.
 */

export default function WorkSection (){

    return (

        <section
            id="career"
            aria-labelledby="career-title"
            className="max-w-5xl px-4 py-16 mx-auto"
        >
            {/* INTRODUCTION */}

            <div className="max-w-3xl mx-auto text-center">
  
                <h2
                    id="career-title"
                    className="mt-2 text-3xl font-bold md:text-4xl"
                >
                    Mon parcours
                </h2>

                <p className="mt-4 leading-7 text-muted-foreground">
                    Un parcours mêlant formation en développement web,
                    projets personnels et expérience professionnelle.
                </p>
            </div>

            {/* TIMELINE */}

            <div className="max-w-3xl mx-auto mt-10 space-y-8">

                {/* FORMATION */}

                <article className="relative pl-6 border-l">
                    <div
                        aria-hidden="true"
                        className="absolute w-3 h-3 rounded-full bg-primary -left-[7px] top-2"
                    />

                    <p className="text-sm font-medium text-primary">
                        Formation
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                        Bac+2 Développeur Web
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        OpenClassrooms
                    </p>

                    <p className="mt-4 leading-7 text-muted-foreground">
                        Formation professionnalisante consacrée à la
                        conception et au développement d&apos;applications
                        web, avec notamment HTML, CSS, JavaScript, React,
                        Node.js, API et Git.
                    </p>
                </article>

                {/* PROJETS PERSONNELS */}

                <article className="relative pl-6 border-l">
                    <div
                        aria-hidden="true"
                        className="absolute w-3 h-3 rounded-full bg-primary -left-[7px] top-2"
                    />

                    <p className="text-sm font-medium text-primary">
                        Développement personnel
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                        Projets web personnels
                    </h3>

                    <p className="mt-4 leading-7 text-muted-foreground">
                        Développement et mise en ligne de projets personnels
                        afin de consolider mes compétences et d&apos;explorer
                        différentes approches du développement web.
                    </p>

                    <ul className="mt-4 space-y-2 text-sm">
                        <li>• Portfolio personnel</li>
                        <li>• LT Coaching</li>
                        <li>• Expérimentation de nouvelles technologies</li>
                    </ul>
                </article>

                {/* DECATHLON */}

                <article className="relative pl-6 border-l">
                    <div
                        aria-hidden="true"
                        className="absolute w-3 h-3 rounded-full bg-primary -left-[7px] top-2"
                    />

                    <p className="text-sm font-medium text-primary">
                        Expérience professionnelle
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                        Vendeur — Decathlon
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        CDI — 35 h
                    </p>

                    <p className="mt-4 leading-7 text-muted-foreground">
                        Mon expérience chez Decathlon m&apos;a permis de  
                        mon sens des responsabilités, mon autonomie et ma capacité 
                        à travailler en équipe dans un environnement où les besoins 
                        évoluent rapidement. Ces compétences sont aujourd&apos;hui 
                        complémentaires à mon parcours de développeur web.
                    </p>
                </article>

            </div>
        </section>
    );
};
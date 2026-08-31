// import Link from "next/link";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
//import { Badge } from "@/components/ui/badge";
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

                {/* <Badge variant={"outline"} id="career-title" className="text-xl text-primary m-8 border-4" >
                    Parcours
                </Badge> */}
                
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
                        Cette expérience m&apos;a permis de développer mon
                        autonomie, mon sens des responsabilités, ma capacité
                        d&apos;adaptation et mon goût du travail en équipe.
                        Je souhaite aujourd&apos;hui mettre ces compétences
                        au service du développement web.
                    </p>
                </article>

            </div>
        </section>
    );
};

/*** ancienne version */
//         <>
//             <Card className="p-4 flex-2 mb-4">
//                 <h3 className="text-2xl p-2">Work </h3>
//                 <div className="flex flex-col gap-4">
//                     {WORKS.map((work,index) => (
//                         <Work
//                             key={index}
//                                 {...work}
//                                 // image={work.image}
//                                 // title={work.title}
//                                 // role={work.role}
//                                 // date={work.date}
//                                 // url={work.url}
//                                 />
//                     ))}
//                 </div>
//             </Card>
//         </>
//     )
// }

// export type WorkProps = {
//     image : string;
//     title : string ;
//     role : string;
//     date : string;
//     freelance? : boolean;
//     url : string;
//     aria : string;
// };

// export function Work ( props : WorkProps) {
//     return (
//         <Link href={props.url} aria-label={props.aria} className="inline-flex item-center p-2 hover:rounded-lg gap-4 hover:bg-accent/50 transition-colors">
//             <Image src={props.image} alt={props.title} width={40} height={40} className="w-10 h-10 object-contain rounded-sm" unoptimized/>
//             <div className="mr-auto">
//                 <div className="flex items-center gap-2">
//                     <p className="text-lg font-semibold">{props.title}</p>
//                     {props.freelance && <Badge variant="outline" className="border-4">Mission</Badge>}
//                 </div>
//                 <p className="text-sm text-muted-foreground">{props.date}</p>
//             </div>
//         </Link>
//     )
// }

// export const WORKS : WorkProps[] = [
//     {
//         image : "/image/projet-web.jpg",
//         title : "Projets Personnel" ,
//         role : "Développe mes competences sur des projets personnel et recherche un poste ou alternance ",
//         date : "2023 - aujourd'hui",
//         freelance :false,
//         url : "/",
//         aria : "perso",
//     },
//     {
//         image : "/image/openclassrooms_logo.jpg",
//         title : "Formation" ,
//         role : "Developpeur web",
//         date : "2023",
//         freelance : false,
//         url : "https://openclassrooms.com/fr/",
//         aria : "OpenClassRooms",
//     }
// ]
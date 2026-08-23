import Image from "next/image"
import moi from "@/public/image/image-portfoliot-dev.webp"
// import SpanText from "./SpanText"
// import { PlaneTakeoff } from 'lucide-react';
// import france from "@/public/image/icon-france-32.png"
// import { GroupIcon } from "./icons/Groupicon"


// a tester une autre facon de faire .
// import { ComponentPropsWithoutRef } from "react"

// const Code = ({ className, ...props}: ComponentPropsWithoutRef<"span">) => {
//     return <span className={cn("bg-accent/30 border-accent p-1 -m1", className)}
//             {...props}
//             />
// }
//  corriger et importer en svg

export const Hero = () => {

    return (
                <section
            aria-labelledby="hero-title"
            className="flex max-lg:flex-col max-w-5xl px-4 py-16 mx-auto items-center gap-10"
        >
            <div className="flex-1">
                <h1
                    id="hero-title"
                    className="font-caption text-4xl text-primary md:text-5xl"
                >
                    Développeur Web Junior
                </h1>

                <p className="font-caption text-2xl mt-2 mb-6">
                    Front-End · Full Stack
                </p>

                <p className="text-lg leading-relaxed">
                    Passionné par le développement web et les technologies
                    numériques, j&apos;aime transformer des idées en interfaces
                    et applications web concrètes.
                </p>

                <p className="text-lg leading-relaxed mt-4">
                    Je travaille principalement avec{' '}
                    <strong>JavaScript, TypeScript, React et Next.js</strong>,
                    tout en restant ouvert à de nouveaux frameworks et
                    environnements techniques.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                    <a
                        href="#projects"
                        className="..."
                    >
                       [ Voir mes projets ]
                    </a>

                    <a
                        href="#contact"
                        className="..."
                    >
                       [ Me contacter ]
                    </a>
                </div>
            </div>

            <div className="p-6">
                <Image
                    src={moi}
                    width={200}
                    height={200}
                    alt="Portrait de Denis Thibaut, développeur web junior"
                    className="border-2 border-white rounded-full"
                />
            </div>
        </section>
    )
}



// ancien contenue recherche alternance
{/* <div className="flex-[2]">
                <h2 className="font-caption text-4xl text-primary mb:text-5xl">Denis Thibaut</h2>
                <h3 className="font-caption text-2xl mt-2 mb-2">Front-End · Full Stack</h3>
                <p>Je suis <SpanText icon={france}>Thibaut</SpanText> développeur Full Stack React / Node Js.<br/>
                   J&apos;adore travailler en <SpanText icon={GroupIcon}>équipe</SpanText> et relever de nouveaux challenges Je suis actuellement a la recherche d&apos;un emploi en Front, Back ou Full Stack.<br/>
                    Je suis ouvert à une alternance pour un bac +3/+4 ce qui me permettra d&apos;améliorer mes compétences et <SpanText>mon stack technique<PlaneTakeoff /></SpanText>.<br/>
                    Ceci me permettra de faire mes preuves et de pouvoir apporter ma vision et mes connaissances ainsi que d&apos;avoir une nouvelle expérience au sein d&apos;une entreprise qui sera a coup sur enrichissante.<br/>
                    J&apos;aime relever des défis et je trouve toujours des solutions sur les problématiques que je rencontre.
                </p>
            </div>
            <div className="mr-0 p-6">
                <Image 
                    src={moi}
                    width={200}
                    height={200}
                    alt="moi"
                    className="border-2 border-white rounded-full"
                />
            </div> */}
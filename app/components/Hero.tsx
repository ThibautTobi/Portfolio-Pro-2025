import Image from "next/image"
import moi from "@/public/image/image-portfoliot-dev.webp"
import SpanText from "./SpanText"
import { PlaneTakeoff } from 'lucide-react';
import france from "@/public/image/icon-france-32.png"
import { GroupIcon } from "./icons/Groupicon"


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
        <section className="flex max-lg:flex-col max-w-3xl px-4 m-auto items-center">
            <div className="flex-[2]">
                <h2 className="font-caption text-4xl text-primary mb:text-5xl">Denis Thibaut</h2>
                <h3 className="font-caption text-2xl mt-2 mb-2">Software Developpeur</h3>
                <p>Je suis <SpanText icon={france}>Thibaut</SpanText> developpeur Full Stack React / Node Js.<br/>
                   J&apos;adore travailler en <SpanText icon={GroupIcon}>equipe</SpanText> et de relever de nouveaux challenge Je suis actuellement a la recherche d&apos;un emploi en Front, Back ou Full Stack.<br/>
                    Je suis ouvert a une alternance pour un bac +3/+4 ce qui me permettra d&apos;ameliorer mes competence et <SpanText>mon stack technique<PlaneTakeoff /></SpanText>.<br/>
                    Ceci me permettra de faire mes preuves et pouvoir aporter ma vision et mes connaissances ainsi que d&apos;avoir une nouvelle experience au sein d&apos;une entreprise qui sera a coup sur enrichissante.<br/>
                    J&apos;aime relever des defis et je trouve toujours des solutions sur les problématiques que je rencontre.
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
            </div>
        </section>
    )
}
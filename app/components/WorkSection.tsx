import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function WorkSection (){

    return (
        <>
            <Card className="p-4 flex-2 mb-4">
                <h3 className="text-2xl p-2">Work </h3>
                <div className="flex flex-col gap-4">
                    {WORKS.map((work,index) => (
                        <Work
                            key={index}
                                {...work}
                                // image={work.image}
                                // title={work.title}
                                // role={work.role}
                                // date={work.date}
                                // url={work.url}
                                />
                    ))}
                </div>
            </Card>
        </>
    )
}

export type WorkProps = {
    image : string;
    title : string ;
    role : string;
    date : string;
    freelance? : boolean;
    url : string;
};

export function Work ( props : WorkProps) {
    return (
        <Link href={props.url} className="inline-flex item-center p-2 hover:rounded-lg gap-4 hover:bg-accent/50 transition-colors">
            <Image src={props.image} alt={props.title} width={40} height={40} className="w-10 h-10 object-contain rounded-sm" unoptimized/>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline" className="border-4">Mission</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    )
}

export const WORKS : WorkProps[] = [
    {
        image : "/image/projet-web.jpg",
        title : "Projets Personnel" ,
        role : "Développe mes competences sur des projets personnel et recherche un poste ou alternance ",
        date : "2023 - aujourd'hui",
        freelance :false,
        url : "/",
    },
    {
        image : "/image/openclassrooms_logo.jpg",
        title : "Formation" ,
        role : "Developpeur web",
        date : "2023",
        freelance : false,
        url : "https://openclassrooms.com/fr/",
    }
]
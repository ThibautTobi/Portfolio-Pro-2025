"use client"

import { LucideIcon,GitCompareArrows,MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SideProjectSection (){

    const [visibleProjects,setVisibleProjetcs] = useState(2);

    const showMoreProjects = () => {
        setVisibleProjetcs(prev => Math.min(prev + 2, SIDE_PROJECTS.length));
    };

    const showLessProjects = () => {
        setVisibleProjetcs(prev => Math.max(prev -2 , 2));
    };
    
    return (
        <>
            <Card className="flex flex-[2] flex-col p-4 gap-2">
                <h3 className="text-2xl p-2">Projects et fun Projects </h3>   
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.slice(0, visibleProjects).map((projets,index) => 
                    <SideProject 
                        key={index}
                        {...projets}/>
                    )}
                </div>
                {/* Boutons Voir Plus / Voir Moins */}
                <div className="mt-4 flex flex-row items-center justify-center gap-2">
                    {visibleProjects < SIDE_PROJECTS.length && (
                        <Button
                            onClick={showMoreProjects}
                            className="p-2"
                            variant="outline"
                        >
                            Voir plus
                        </Button>
                    )}
                    {visibleProjects > 2 && (
                        <Button
                            onClick={showLessProjects}
                            className="p-2"
                            variant="outline"
                        >
                            Voir moins
                        </Button>
                    )}
                </div>
            </Card>
        </>
    )
}

export type SideProjectProps = {
    Logo : LucideIcon;
    title : string ;
    description : string;
    site? : string;
    url : string;
    formation : boolean;
    fin : boolean;
    nonfini : boolean;
}
export function SideProject  ( props : SideProjectProps) {

    return (
        <div className="relative inline-flex hover:rounded-lg gap-4 p-2 hover:bg-accent/30 transition-colors group w-full flex-col">
                <div className="flex flex-row items-center">
                    <span className="bg-accent text-accent-foreground p-4 mr-3 rounded-sm">
                        <props.Logo size={16}/>
                    </span>
                    <div className="max-w-56">
                        <p className="text-lg font-semibold">{props.title}</p>
                        <p className="text-sm text-muted-foreground">{props.description}</p>
                    </div>
                </div>

                {/* Lien vers GitHub + Lien vers le site si dispo */}
                <div className="flex gap-4 px-2 mt-2">
                    <Link
                    href={props.url}
                    target="_blank"
                    className="text-sm hover:underline"
                    >
                        <Button size="sm" variant="outline">Code GitHub</Button>
                    </Link>
                    {props.site && (
                    <Link
                        href={props.site}
                        target="_blank"
                        className="text-sm hover:underline"
                    >
                        <Button size="sm" variant="outline">Site Web</Button>
                    </Link>
                    )}
                </div>

                <div className="flex flex-row justify-between">
                    <div className="top-2 right-2">
                        {props.formation && (
                            <Badge variant="outline" className="border-4 m-2">Formation</Badge>
                        )}
                        {props.fin && (
                            <Badge variant="outline" className="border-4 m-2">Fini</Badge>
                        )}
                        {props.nonfini && (
                            <Badge variant="outline" className="border-4 m-2">Non Fini</Badge>
                        )}
                    </div>
                    <div className="top-1/2 group-hover:translate-x-2 group-hover:translate-y-1 transition-transform mr-2">
                        <MoveRight />
                    </div>
                </div>
        </div>
    )
}

export const SIDE_PROJECTS : SideProjectProps[] = [
    {
        Logo : GitCompareArrows,
        title : "Projet Portfolio actuel",
        description : " création portfolio TypeScript Next Js",
        url : "https://github.com/ThibautTobi/Portfolio-Pro-2025",
        site : "",
        formation : false,
        fin : true,
        nonfini : false,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet Portfolio 2",
        description : " création deuxieme portfolio ",
        url : "https://github.com/ThibautTobi/photo-web-site",
        site : "https://www.denis-thibaut.com/",
        formation : false,
        fin : true,
        nonfini : false,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet Perso",
        description : " création site photographe en Next Js / Node Js avec gestion client , commande , selection et recuperation photos",
        url : "https://github.com/ThibautTobi/photo-web-site",
        formation : false,
        fin : false,
        nonfini : true,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet Perso",
        description : " création site e-commerce react / Node Js avec systeme de paiements",
        url : "https://github.com/ThibautTobi/photo-web-site",
        formation : false,
        fin : false,
        nonfini : true,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet Premier Portfolio",
        description : "creation de mon premier portfolio ",
        site : "https://thibauttobi.github.io/Portfolio-Thibaut/",
        url : "https://github.com/ThibautTobi/Portfolio-Thibaut",
        formation : false ,
        fin : true,
        nonfini : false,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet 7 : Back-End-Mon-Vieux-Grimoire",
        description : " creation du Back end en Node Js",
        url : "https://github.com/ThibautTobi/P7-Back-End-Mon-Vieux-Grimoire",
        formation : true,
        fin : true,
        nonfini : false,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet 6 Site Kasa Location immobiliere",
        description : "création Page React",
        url : "https://github.com/ThibautTobi/P6_Site_Kasa_Location_immobiliere",
        formation : true,
        fin : true,
        nonfini : false,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet 5 : Nina Carducci",
        description : "optimisation et referencement de la page web",
        url : "https://github.com/ThibautTobi/P5_Nina_Carducci",
        formation : true,
        fin : true,
        nonfini : false,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet 3 : Portfolio architecte sophie bluel",
        description : "integration du javascript",
        url : "https://github.com/ThibautTobi/Projet_3_Portfolio-architecte-sophie-bluel",
        formation : true,
        fin : true,
        nonfini : false,
    },
    {
        Logo : GitCompareArrows,
        title : "Projet 2 : Booki",
        description : " création responsive de la page HTML",
        url : "https://github.com/ThibautTobi/Projet_2",
        formation : true,
        fin : true,
        nonfini : false,
    },
]
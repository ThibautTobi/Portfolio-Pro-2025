// import Link from "next/link";
// import { Card } from "@/components/ui/card";
// import { Mail } from "lucide-react";
// import { LinkedinIcon } from "./icons/Linkedinicon";

import {
    GithubIcon,
    // Github,
    // Linkedin,
    Mail,
} from "lucide-react";
import { LinkedinIcon } from "./icons/Linkedinicon";
//import { Badge } from "@/components/ui/badge";

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


                {/* <Badge variant={"outline"} id="contact-title" className="text-xl text-primary m-8 border-4" >
                    Contact
                </Badge> */}

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


        /** ancienne version */
        // <>
        //     <Card className="p-4 flex-2 flex flex-col items-center justify-center">
        //         <h3 className="text-2xl p-2">Contacts</h3>
        //         <p className="text-muted-foreground p-2">Email Professionnel</p>
        //         <Link href="mailto:thibaut.denis.developpeur@gmail.com" aria-label="Mail" >
        //             <Mail className="w-10 h-10 transition delay-200 duration-200 ease-in-out hover:-translate-y-1 hover:scale-130"/>
        //         </Link>
        //         <p className="text-muted-foreground mt-4 p-2">Linkedin</p>
        //         <Link href="https://www.linkedin.com/in/thibaut-denis-2b12b21b1/" aria-label="Linkedin" >
        //             <LinkedinIcon size={42} className="text-foreground transition delay-200 duration-200 ease-in-out hover:-translate-y-1 hover:scale-130"/> 
        //         </Link>
        //     </Card>
        // </>
    )
}

//****************************** adapter pour reseaux sociaux (a finir) */
// const ContactCard = (props: {
//     logo : LucideIcon;
//     image : string;
//     mediumImage : string;
//     name : string;
//     description : string;
// }) => {
//     return (
//         <Card className="p-3 bg-accent/10">
//             <div className="relative">
//                 <Image src={props.image} alt={props.name} width={10} height={10} className="w-10 h-10"/>
//                 <Image src={props.mediumImage} alt={props.name} width={4} height={4} className="w-4 h-4 absolute -bottom-2 -right-2"/>
//             </div>
//             <div className="mr-auto">
//                 <div className="flex items-center gap-2">
//                     <p className="text-lg font-semibold">{props.name}</p>
//                 </div>
//                 <p className="text-sm text-muted-foreground">{props.description}</p>
//             </div>
//         </Card>
//     )
// }
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons/Linkedinicon";

export default function ContactSection (){

    return (
        <>
            <Card className="p-4 flex-2 flex flex-col items-center justify-center">
                <h3 className="text-2xl p-2">Contacts</h3>
                <p className="text-muted-foreground p-2">Mail Profesionnel</p>
                <Link href="mailto:thibaut.denis.developpeur@gmail.com" aria-label="Mail" >
                    <Mail className="w-10 h-10 transition delay-200 duration-200 ease-in-out hover:-translate-y-1 hover:scale-130"/>
                </Link>
                <p className="text-muted-foreground mt-4 p-2">Linkedin</p>
                <Link href="https://www.linkedin.com/in/thibaut-denis-2b12b21b1/" aria-label="Linkedin" >
                    <LinkedinIcon size={42} className="text-foreground transition delay-200 duration-200 ease-in-out hover:-translate-y-1 hover:scale-130"/> 
                </Link>
            </Card>
        </>
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
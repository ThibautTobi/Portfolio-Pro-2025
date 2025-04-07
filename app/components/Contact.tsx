import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";
import { LinkedinIcon } from "./icons/Linkedinicon"

export default function Contact (){

    return(
        <section className="flex flex-col gap-4 max-w-3xl px-4 m-auto">
            <Badge variant={"outline"} className="text-xl text-primary m-auto border-4" >Contacts</Badge>
            <Card className="p-6 flex flex-col items-center text-center">
                
                <h2 className="scroll-m-20 p-5 text-xl m-auto text-center font-semibold tracking-tight first:mt-0">
                    Hate de pouvoir echanger avec vous.<br/> A bientot ...
                </h2>
                <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
                    <Link href="mailto:thibaut.denis.developpeur@gmail.com" aria-label="Mail" >
                        <Mail className="w-10 h-10 transition-transform duration-300 hover:scale-110"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/thibaut-denis-2b12b21b1/" aria-label="Linkedin" >
                           <LinkedinIcon size={42} className="text-foreground transition-transform duration-300 hover:scale-110"/> 
                    </Link>
                </div>
            </Card>
        </section>
    );
};

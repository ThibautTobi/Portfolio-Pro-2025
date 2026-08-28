import ContactSection from "./ContactSection";
import SideProjectSection from "./SideProjectSection";
import WorkSection from "./WorkSection";
import {Spacing} from "./Spacing";
//import { Badge } from "@/components/ui/badge";

// export default function Presentation (){

//     return (
//         <section className="max-w-3xl p-4 m-auto">
//             <div className="flex justify-center">
//                 <Badge variant={"outline"} className="text-xl border-4 text-primary">Projets</Badge>
//             </div>
//             <div className="flex max-md:flex-col max-w-3xl p-4 md:items-start items-center gap-4 m-auto">
//                 <SideProjectSection />
//                 <div>
//                     <WorkSection />
//                     <ContactSection />
//                 </div>
//             </div>
//         </section>
//     );
// };


import { Hero } from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Separator from "./separateur";

/**
 * Page principale du portfolio.
 *
 * Presentation sert uniquement à organiser les différentes
 * sections dans le bon ordre.
 */

export default function Presentation (){

    return (
        <main>

            {/* Présentation principale */}
            <Spacing size="mb" />
            <Hero />
            <Spacing size="mb" />

            <Separator />

            {/* Présentation personnelle */}
            <Spacing size="mb" />
            <About />
            <Spacing size="mb" />

            <Separator />

            {/* Compétences techniques */}
            <Spacing size="mb" />
            <Skills />
            <Spacing size="mb" />

            <Separator />

            {/* Projets */}
            <Spacing size="mb" />
            <SideProjectSection />
            <Spacing size="mb" />

            <Separator />
            
            {/* Parcours */}
            <Spacing size="mb" />
            <WorkSection />
            <Spacing size="mb" />

            {/* Contact / recrutement */}
            <Spacing size="mb" />
            <ContactSection />
            <Spacing size="mb" />

        </main> 
    );
};
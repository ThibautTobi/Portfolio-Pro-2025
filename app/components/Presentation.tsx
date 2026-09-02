import ContactSection from "./ContactSection";
import SideProjectSection from "./SideProjectSection";
import WorkSection from "./WorkSection";
import {Spacing} from "./Spacing";
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
        <>
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

            <Separator />
            
            {/* Contact / recrutement */}
            <Spacing size="mb" />
            <ContactSection />
            <Spacing size="mb" />
        </> 
    );
};
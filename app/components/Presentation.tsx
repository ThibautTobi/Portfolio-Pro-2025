import ContactSection from "./ContactSection";
import SideProjectSection from "./SideProjectSection";
import WorkSection from "./WorkSection";
import { Badge } from "@/components/ui/badge";

export default function Presentation (){

    return (
        <section className="max-w-3xl p-4 m-auto">
            <div className="flex justify-center">
                <Badge variant={"outline"} className="text-xl border-4 text-primary">Projets</Badge>
            </div>
            <div className="flex max-md:flex-col max-w-3xl p-4 md:items-start items-center gap-4 m-auto">
                <SideProjectSection />
                <div>
                    <WorkSection />
                    <ContactSection />
                </div>
            </div>
        </section>
    );
};
import ContactSection from "./ContactSection";
import SideProjectSection from "./SideProjectSection";
import WorkSection from "./WorkSection";

export default function Presentation (){

    return (
        <section className="flex max-md:flex-col max-w-3xl p-4 md:items-start items-center gap-4 m-auto">
            <SideProjectSection />
            <div>
                <WorkSection />
                <ContactSection />
            </div>
        </section>
    );
};
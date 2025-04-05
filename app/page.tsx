import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Separator from "./components/separateur";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="mb" />
      <Hero />
      <Spacing size="mb" />
      <Separator />
      <Spacing size="mb" />
      <Presentation />
      <Spacing size="mb" />
      <Separator />
      <Spacing size="mb" />
      <Skills />
      <Spacing size="mb" />
      <Separator />
      <Spacing size="mb" />
      <Contact />
      <Spacing size="mb" />
      <Footer />
    </main>
  );
}

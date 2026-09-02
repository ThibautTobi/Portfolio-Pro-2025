import Footer from "./components/Footer";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Denis Thibaut",

    jobTitle: "Développeur Web Junior",

    url: "https://portfolio-pro-2025.vercel.app",

    sameAs: [
        "https://github.com/ThibautTobi",
        "https://www.linkedin.com/in/thibaut-denis-2b12b21b1/",
    ],

    knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "HTML",
        "CSS",
        "Développement web",
    ],
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
        }}
      />

      <Header />
        <main>
          <Presentation />
        </main>
      <Footer />
    </>
  );
}
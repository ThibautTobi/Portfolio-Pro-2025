import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
    Code2,
    Database,
    GitBranch,
    Palette,
    Server,
    Wrench,
} from "lucide-react";

/**
 * Les compétences sont organisées par domaine.
 *
 * IMPORTANT :
 * Nous ne mettons volontairement PAS de pourcentage.
 *
 * Un "React 90 %" serait difficile à justifier en entretien.
 * Pour un profil junior, il vaut mieux présenter les technologies
 * réellement utilisées et laisser les projets démontrer le niveau.
 */

const skillCategories = [
    {
        title: "Front-End",
        icon: Code2,
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
        ],
    },

    {
        title: "Back-End",
        icon: Server,
        skills: [
            "Node.js",
            "Express",
            "API REST",
        ],
    },

    {
        title: "UI & Styling",
        icon: Palette,
        skills: [
            "Tailwind CSS",
            "SCSS",
            "shadcn/ui",
            "Responsive Design",
        ],
    },

    {
        title: "Bases de données",
        icon: Database,
        skills: [
            "MongoDB",
            "PostgreSQL",
            "Prisma",
        ],
    },

    {
        title: "Versioning & outils",
        icon: GitBranch,
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Vercel",
        ],
    },

    {
        title: "Qualité & bonnes pratiques",
        icon: Wrench,
        skills: [
            "ESLint",
            "Prettier",
            "Tests",
            "SEO",
            "Accessibilité",
        ],
    },
];

/** Section Compétences. */
export default function Skills (){

    return(
          <section
              id="skills"
              aria-labelledby="skills-title"
              className="max-w-5xl px-4 py-16 mx-auto"
          >
              {/* INTRODUCTION */}
              <div className="text-center">

                  <h2
                      id="skills-title"
                      className="mt-2 text-3xl font-bold md:text-4xl"
                  >
                      Technologies et outils que j&apos;utilise
                  </h2>

                  <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                      Un socle principalement orienté Front-End, avec une
                      ouverture vers le développement Full Stack.
                  </p>
              </div>

              {/* CATÉGORIES */}
              <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                  {skillCategories.map((category) => {
                      const Icon = category.icon;

                      return (
                          <Card
                              key={category.title}
                              className="p-6"
                          >
                              {/* Titre de catégorie */}
                              <div className="flex items-center gap-3">
                                  <Icon
                                      aria-hidden="true"
                                      className="w-6 h-6 text-primary"
                                  />

                                  <h3 className="text-xl font-semibold">
                                      {category.title}
                                  </h3>
                              </div>

                              {/* Liste des technologies */}
                              <ul className="flex flex-wrap gap-2 mt-5">
                                  {category.skills.map((skill) => (
                                      <li key={skill}>
                                          <Badge variant="secondary">
                                              {skill}
                                          </Badge>
                                      </li>
                                  ))}
                              </ul>
                          </Card>
                      );
                  })}
              </div>

              {/* IA & PRODUCTIVITÉ */}
              <div className="max-w-3xl p-6 mx-auto mt-8 border rounded-lg">
                  <h3 className="text-xl font-semibold">
                      IA & productivité
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                      J&apos;utilise les outils d&apos;assistance IA comme
                      support dans mon développement pour accélérer la
                      recherche, la compréhension du code, le debugging, la
                      documentation et certaines tâches répétitives, tout en
                      vérifiant et validant les résultats.
                  </p>
              </div>
          </section>
    )
}
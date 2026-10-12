/**
 * Section Parcours.
 *
 * Cette section présente :
 * - la formation de développeur web ;
 * - les certifications complémentaires ;
 * - les projets personnels ;
 * - l'expérience professionnelle actuelle ;
 * - la transition vers le développement web.
 */

export default function WorkSection() {
  return (
    <section
      id="career"
      aria-labelledby="career-title"
      className="mx-auto max-w-5xl px-4 py-16"
    >
      {/* INTRODUCTION */}

      <div className="mx-auto max-w-3xl text-center">
        <h2 id="career-title" className="mt-2 text-3xl font-bold md:text-4xl">
          Mon parcours
        </h2>

        <p className="mt-4 leading-7 text-muted-foreground">
          Un parcours mêlant formation en développement web, certifications,
          projets personnels et expérience professionnelle.
        </p>
      </div>

      {/* TIMELINE */}

      <div className="mx-auto mt-10 max-w-3xl space-y-8">
        {/* FORMATION */}

        <article className="relative border-l pl-6">
          <div
            aria-hidden="true"
            className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary"
          />

          <p className="text-sm font-medium text-primary">Formation</p>

          <h3 className="mt-1 text-xl font-semibold">
            Bac+2 Développeur Web
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            OpenClassrooms
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            Formation professionnalisante consacrée à la conception et au
            développement d&apos;applications web, avec notamment HTML, CSS,
            JavaScript, React, Node.js, API et Git.
          </p>

          {/* LIEN VERS LE DIPLÔME */}

          <div className="mt-4">
            <a
              href="/documents/diplome-openclassrooms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Consulter le diplôme OpenClassrooms au format PDF"
            >
              Consulter mon diplôme
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        {/* CERTIFICATIONS */}

        <article className="relative border-l pl-6">
          <div
            aria-hidden="true"
            className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary"
          />

          <p className="text-sm font-medium text-primary">
            Certifications
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            Cisco Networking Academy
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Certifications en technologies web et programmation
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            Des certifications complémentaires qui témoignent de ma démarche
            d&apos;apprentissage et du développement de mes compétences
            techniques en HTML, CSS et JavaScript.
          </p>

          {/* LIEN VERS LE PROFIL PUBLIC CREDLY */}

          <div className="mt-4">
            <a
              href="https://www.credly.com/users/thibaut-denis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Consulter mon profil public de badges Cisco sur Credly"
            >
              Voir mes badges Cisco
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        {/* PROJETS PERSONNELS */}

        <article className="relative border-l pl-6">
          <div
            aria-hidden="true"
            className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary"
          />

          <p className="text-sm font-medium text-primary">
            Développement personnel
          </p>

          <h3 className="mt-1 text-xl font-semibold">Projets web personnels</h3>

          <p className="mt-4 leading-7 text-muted-foreground">
            Développement et mise en ligne de projets personnels afin de
            consolider mes compétences et d&apos;explorer différentes approches
            du développement web.
          </p>

          <ul className="mt-4 list-inside list-disc space-y-2 text-sm">
            <li>Portfolio personnel</li>
            <li>LT Coaching</li>
            <li>Expérimentation de nouvelles technologies</li>
          </ul>
        </article>

        {/* EXPÉRIENCE PROFESSIONNELLE */}

        <article className="relative border-l pl-6">
          <div
            aria-hidden="true"
            className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary"
          />

          <p className="text-sm font-medium text-primary">
            Expérience professionnelle
          </p>

          <h3 className="mt-1 text-xl font-semibold">Vendeur — Decathlon</h3>

          <p className="mt-1 text-sm text-muted-foreground">CDI — 35 h</p>

          <p className="mt-4 leading-7 text-muted-foreground">
            Mon expérience chez Decathlon m&apos;a permis de développer mon
            sens des responsabilités, mon autonomie et ma capacité à travailler
            en équipe dans un environnement où les besoins évoluent rapidement.
            Ces compétences sont aujourd&apos;hui complémentaires à mon parcours
            de développeur web.
          </p>
        </article>
      </div>
    </section>
  );
}
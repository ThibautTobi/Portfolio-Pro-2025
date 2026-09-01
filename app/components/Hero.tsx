import Image from "next/image"
import moi from "@/public/image/image-portfoliot-dev.webp"

/**
 * Hero principal du portfolio.
 *
 * Objectifs :
 * - présenter immédiatement ton profil ;
 * - indiquer clairement ton niveau ;
 * - afficher ton orientation Front-End / Full Stack ;
 * - indiquer que tu recherches un CDI ;
 * - supprimer toute référence à l'alternance.
 */

export const Hero = () => {

    return (
        <section
            id="home"
            aria-labelledby="hero-title"
            className="flex flex-col max-w-5xl px-4 py-16 mx-auto gap-10"
        >
            <div className="flex flex-col lg:flex-row items-center gap-8">

                <div className="flex-1">
                    <h1
                        id="hero-title"
                        className="font-caption text-4xl text-primary md:text-5xl"
                    >
                        Développeur Web Junior
                    </h1>

                    <p className="font-caption text-2xl mt-2 mb-6">
                        Front-End · Full Stack
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={moi}
                        width={200}
                        height={200}
                        priority
                        alt="Portrait de Denis Thibaut, développeur web junior"
                        className="border-2 border-white rounded-full"
                    />
                </div>
            </div>
            <div>
                <p className="text-lg leading-relaxed">
                    Passionné par le développement web et les technologies
                    numériques, j&apos;aime transformer des idées en interfaces
                    et applications web concrètes.
                </p>

                <p className="text-lg leading-relaxed mt-4">
                    Je travaille principalement avec : {''}
                    <strong>JavaScript, TypeScript, React et Next.js</strong>,
                    tout en restant ouvert à de nouveaux frameworks et
                    environnements techniques.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium border-2 hover:bg-accent transition-colors"
                    >
                       [ Voir mes projets ]
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium border-2 hover:bg-accent transition-colors"
                    >
                       [ Me contacter ]
                    </a>
                </div>

                {/* Disponibilité */}
                <p className="mt-6 text-sm text-accent-foreground">
                    Recherche actuellement un CDI en tant que développeur web
                    junior.
                </p>
            </div>
        </section>
    )
}
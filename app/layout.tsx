import type { Metadata } from "next";
import "./globals.css";

/**
 * Métadonnées principales du portfolio.
 *
 * Elles permettent aux moteurs de recherche et aux plateformes
 * sociales de comprendre le contenu de ton site.
 */
export const metadata: Metadata = {
    title: "Denis Thibaut | Développeur Web Junior Front-End / Full Stack",

    description:
        "Portfolio de Denis Thibaut, développeur web junior spécialisé en Front-End avec JavaScript, TypeScript, React et Next.js. À la recherche d'un CDI.",

    authors: [
        {
            name: "Denis Thibaut",
        },
    ],

    creator: "Denis Thibaut",

    keywords: [
        "développeur web junior",
        "développeur Front-End",
        "développeur Full Stack",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
    ],

    openGraph: {
        type: "website",

        locale: "fr_FR",

        title:
            "Denis Thibaut | Développeur Web Junior Front-End / Full Stack",

        description:
            "Portfolio de Denis Thibaut, développeur web junior spécialisé en Front-End et ouvert aux opportunités Full Stack.",

        siteName: "Denis Thibaut — Portfolio",
    },

    robots: {
        index: true,
        follow: true,
    },
};

/**
 * Layout racine de l'application.
 */

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                {children}
            </body>
        </html>
    );
}


// import type { Metadata } from "next";
// import localFont from "next/font/local";
// //  a importer Playwrite India
// // import  from "next/font/local";
// import "../app/globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//     title:  
//       "Denis Thibaut — Développeur Web Junior | Front-End & Full Stack",
//     description:
//       "Portfolio de Denis Thibaut, développeur web junior orienté Front-End et Full Stack. Découvrez ses projets et compétences en JavaScript, TypeScript, React et Next.js.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="fr" className="h-full w-full">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

// exemple carte qi profil partager

// openGraph: {
//     type: "website",
//     locale: "fr_FR",

//     title:
//         "Denis Thibaut | Développeur Web Junior Front-End / Full Stack",

//     description:
//         "Portfolio de Denis Thibaut, développeur web junior spécialisé en Front-End.",

//     siteName: "Denis Thibaut — Portfolio",

//     images: [
//         {
//             url: "/og-image.png",
//             width: 1200,
//             height: 630,
//             alt: "Denis Thibaut — Développeur Web Junior",
//         },
//     ],
// },
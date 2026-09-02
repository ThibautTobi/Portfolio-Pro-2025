import type { Metadata } from "next";
import "./globals.css";

/**
 * Métadonnées principales du portfolio.
 *
 * Elles permettent aux moteurs de recherche et aux plateformes
 * sociales de comprendre le contenu de ton site.
 */

const siteUrl = "https://portfolio-pro-2025.vercel.app";

export const metadata: Metadata = {

    metadataBase: new URL(siteUrl),

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
        "développeur React",
        "développeur Next.js",
    ],

    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: siteUrl,

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
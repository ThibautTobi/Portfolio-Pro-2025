import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Skills from "@/app/components/Skills";

describe("Skills", () => {
  it("affiche la section compétences", () => {
    render(<Skills />);

    expect(
      screen.getByRole("heading", {
        name: "Technologies et outils que j'utilise",
        level: 2,
      }),
    ).toBeInTheDocument();
  });

  it("affiche les principales catégories", () => {
    render(<Skills />);

    const categories = [
      "Front-End",
      "Back-End",
      "UI & Styling",
      "Bases de données",
      "Versioning & outils",
      "Qualité & bonnes pratiques",
    ];

    for (const category of categories) {
      expect(
        screen.getByRole("heading", {
          name: category,
          level: 3,
        }),
      ).toBeInTheDocument();
    }
  });

  it("affiche les technologies principales", () => {
    render(<Skills />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Git")).toBeInTheDocument();
    expect(screen.getByText("SEO")).toBeInTheDocument();
    expect(screen.getByText("Accessibilité")).toBeInTheDocument();
  });
});

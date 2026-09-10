import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import SideProjectSection from "@/app/components/SideProjectSection";

describe("SideProjectSection", () => {
  it("affiche le titre de la section", () => {
    render(<SideProjectSection />);

    expect(
      screen.getByRole("heading", {
        name: "Projets sélectionnés",
        level: 2,
      }),
    ).toBeInTheDocument();
  });

  it("affiche les projets principaux", () => {
    render(<SideProjectSection />);

    expect(screen.getByText("LT Coaching V1")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Mon Vieux Grimoire")).toBeInTheDocument();
    expect(screen.getByText("Nina Carducci")).toBeInTheDocument();
  });

  it("affiche les technologies principales", () => {
    render(<SideProjectSection />);

    expect(screen.getAllByText("Next.js").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("MongoDB")).toBeInTheDocument();
  });

  it("fournit les liens GitHub des projets", () => {
    render(<SideProjectSection />);

    expect(
      screen.getByRole("link", {
        name: "Voir le code source de LT Coaching V1 sur GitHub",
      }),
    ).toHaveAttribute("href", "https://github.com/ThibautTobi/LTcoaching");

    expect(
      screen.getByRole("link", {
        name: "Voir le code source de Mon Vieux Grimoire sur GitHub",
      }),
    ).toHaveAttribute(
      "href",
      "https://github.com/ThibautTobi/P7-Back-End-Mon-Vieux-Grimoire",
    );
  });

  it("affiche le site de LT Coaching", () => {
    render(<SideProjectSection />);

    expect(
      screen.getByRole("link", {
        name: "Voir le site de LT Coaching V1",
      }),
    ).toHaveAttribute("href", "https://lt-coaching.vercel.app/");
  });
});

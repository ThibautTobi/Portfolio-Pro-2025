import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import WorkSection from "@/app/components/WorkSection";

describe("WorkSection", () => {
  it("affiche le titre de la section", () => {
    render(<WorkSection />);

    expect(
      screen.getByRole("heading", {
        name: "Mon parcours",
        level: 2,
      }),
    ).toBeInTheDocument();
  });

  it("affiche les trois étapes du parcours", () => {
    render(<WorkSection />);

    expect(
      screen.getByRole("heading", {
        name: "Bac+2 Développeur Web",
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Projets web personnels",
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Vendeur — Decathlon",
        level: 3,
      }),
    ).toBeInTheDocument();
  });

  it("affiche les informations de formation", () => {
    render(<WorkSection />);

    expect(screen.getByText("OpenClassrooms")).toBeInTheDocument();
    expect(screen.getByText("Bac+2 Développeur Web")).toBeInTheDocument();
  });

  it("affiche les informations professionnelles", () => {
    render(<WorkSection />);

    expect(screen.getByText("CDI — 35 h")).toBeInTheDocument();
    expect(screen.getByText("Vendeur — Decathlon")).toBeInTheDocument();
  });
});

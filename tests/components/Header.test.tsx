import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "@/app/components/Header";

describe("Header", () => {
  it("affiche la navigation principale", () => {
    render(<Header />);

    expect(
      screen.getByRole("navigation", {
        name: "Navigation principale",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Accueil",
        // exact: true,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Projets",
        // exact: true,
      }),
    ).toHaveAttribute("href", "#projects");

    expect(
      screen.getByRole("link", {
        name: "Contact",
        // exact: true,
      }),
    ).toHaveAttribute("href", "#contact");
  });

  it("garde le menu mobile fermé au chargement", () => {
    render(<Header />);

    expect(
      screen.queryByRole("navigation", {
        name: "Navigation mobile",
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Ouvrir le menu",
      }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("ouvre le menu mobile", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const menuButton = screen.getByRole("button", {
      name: "Ouvrir le menu",
    });

    await user.click(menuButton);

    expect(
      screen.getByRole("navigation", {
        name: "Navigation mobile",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Fermer le menu",
      }),
    ).toHaveAttribute("aria-expanded", "true");
  });

  it("ferme le menu après avoir sélectionné une navigation", async () => {
    const user = userEvent.setup();

    render(<Header />);

    const menuButton = screen.getByRole("button", {
      name: "Ouvrir le menu",
    });

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const mobileNavigation = screen.getByRole("navigation", {
      name: "Navigation mobile",
    });

    const projectsLink = within(mobileNavigation).getByRole("link", {
      name: "Projets",
    });

    await user.click(projectsLink);

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("possède les liens sociaux avec les bonnes URLs", () => {
    render(<Header />);

    const github = screen.getAllByRole("link", {
      name: "Voir mon profil GitHub",
    });

    const linkedin = screen.getAllByRole("link", {
      name: "Voir mon profil LinkedIn",
    });

    expect(github[0]).toHaveAttribute("href", "https://github.com/ThibautTobi");

    expect(linkedin[0]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/thibaut-denis-2b12b21b1/",
    );
  });
});

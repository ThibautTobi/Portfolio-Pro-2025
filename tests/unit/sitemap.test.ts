import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("retourne au moins une URL", () => {
    const result = sitemap();

    expect(result.length).toBeGreaterThan(0);
  });

  it("contient l'URL principale du portfolio", () => {
    const result = sitemap();

    expect(result[0].url).toBe("https://portfolio-pro-2025.vercel.app");
  });

  it("possède une priorité de 1 pour la page principale", () => {
    const result = sitemap();

    expect(result[0].priority).toBe(1);
  });

  it("possède une fréquence de mise à jour mensuelle", () => {
    const result = sitemap();

    expect(result[0].changeFrequency).toBe("monthly");
  });

  it("possède une date de modification valide", () => {
    const result = sitemap();

    expect(result[0].lastModified).toBeInstanceOf(Date);
  });
});

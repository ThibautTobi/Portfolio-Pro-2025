import { test, expect } from "@playwright/test";

test.describe("SEO", () => {
  test("la page possède les métadonnées principales", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(
      "Denis Thibaut | Développeur Web Junior Front-End / Full Stack",
    );

    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /Portfolio de Denis Thibaut, développeur web junior/i,
    );

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://portfolio-pro-2025.vercel.app",
    );

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Denis Thibaut/,
    );

    await expect(
      page.locator('meta[property="og:description"]'),
    ).toBeAttached();
  });

  test("la page possède les données structurées Person", async ({ page }) => {
    await page.goto("/");

    const jsonLd = page.locator('script[type="application/ld+json"]');

    await expect(jsonLd).toHaveCount(1);

    const content = await jsonLd.textContent();

    expect(content).toBeTruthy();

    const structuredData = JSON.parse(content!);

    expect(structuredData["@context"]).toBe("https://schema.org");
    expect(structuredData["@type"]).toBe("Person");
    expect(structuredData.name).toBe("Denis Thibaut");
    expect(structuredData.jobTitle).toBe("Développeur Web Junior");

    expect(structuredData.sameAs).toContain("https://github.com/ThibautTobi");

    expect(structuredData.sameAs).toContain(
      "https://www.linkedin.com/in/thibaut-denis-2b12b21b1/",
    );
  });

  test("la page utilise le français", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  });
});

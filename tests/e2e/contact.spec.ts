import { test, expect } from "@playwright/test";

test.describe("Section contact", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
  });

  test("la section contact est visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: /parlons de votre prochain projet/i,
      }),
    ).toBeVisible();
  });

  test("le lien GitHub possède la bonne destination", async ({ page }) => {
    const githubLink = page.getByRole("link", {
      name: /github/i,
    }).first();

    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/ThibautTobi",
    );
  });

  test("le lien LinkedIn possède une destination", async ({ page }) => {
    const linkedinLink = page.getByRole("link", {
      name: /linkedin/i,
    }).first();

    await expect(linkedinLink).toHaveAttribute(
      "href",
      /linkedin\.com\/in\//,
    );
  });

test("le lien email utilise mailto", async ({ page }) => {
  const emailLink = page.locator(
    'a[href="mailto:thibaut.denis.developpeur@gmail.com"]',
  );

  await expect(emailLink).toBeVisible();

  await expect(emailLink).toHaveAttribute(
    "href",
    "mailto:thibaut.denis.developpeur@gmail.com",
  );
});
});
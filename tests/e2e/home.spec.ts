import { test, expect } from "@playwright/test";

test.describe("Page d'accueil", () => {
  test("la page d'accueil se charge correctement", async ({ page }) => {
    // Ouvre la page d'accueil.
    await page.goto("/");

    // Vérifie que la page a un titre.
    await expect(page).toHaveTitle(/Denis Thibaut/);

    // Vérifie que le titre principal est présent.
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Développeur Web Junior",
      }),
    ).toBeVisible();
  });
  
  test("les principales sections du portfolio sont présentes", async ({
  page,
}) => {
  await page.goto("/");

  // Hero
  await expect(page.locator("#home")).toBeVisible();

  // Présentation
  await expect(page.locator("#about")).toBeVisible();

  // Compétences
  await expect(page.locator("#skills")).toBeVisible();

  // Projets
  await expect(page.locator("#projects")).toBeVisible();

  // Parcours
  await expect(page.locator("#career")).toBeVisible();

  // Contact
  await expect(page.locator("#contact")).toBeVisible();
});
});
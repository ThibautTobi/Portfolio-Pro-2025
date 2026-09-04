import { test, expect } from "@playwright/test";

test.describe("Navigation principale", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("le lien Accueil fonctionne", async ({ page }) => {
    await page.getByRole("link", {
      name: "Accueil",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#home$/);
  });

  test("le lien À propos fonctionne", async ({ page }) => {
    await page.getByRole("link", {
      name: "À propos",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#about$/);
  });

  test("le lien Compétences fonctionne", async ({ page }) => {
    await page.getByRole("link", {
      name: "Compétences",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#skills$/);
  });

  test("le lien Projets fonctionne", async ({ page }) => {
    await page.getByRole("link", {
      name: "Projets",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#projects$/);
  });

  test("le lien Parcours fonctionne", async ({ page }) => {
    await page.getByRole("link", {
      name: "Parcours",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#career$/);
  });

  test("le lien Contact fonctionne", async ({ page }) => {
    await page.getByRole("link", {
      name: "Contact",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#contact$/);
  });

  test("la navigation vers les projets affiche la section projets", async ({
    page,
  }) => {
    await page.getByRole("link", {
      name: "Projets",
      exact: true,
    }).click();

    await expect(page.locator("#projects")).toBeVisible();
  });

  test("la navigation vers le contact affiche la section contact", async ({
    page,
  }) => {
    await page.getByRole("link", {
      name: "Contact",
      exact: true,
    }).click();

    await expect(page.locator("#contact")).toBeVisible();
  });
});
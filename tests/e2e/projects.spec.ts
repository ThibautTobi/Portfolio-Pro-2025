import { test, expect } from "@playwright/test";

test.describe("Section projets", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#projects");
  });

  test("la section projets est visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: /projets/i,
      }),
    ).toBeVisible();
  });

  test("les projets affichent leurs informations", async ({ page }) => {
    const projectsSection = page.locator("#projects");

    await expect(projectsSection).toBeVisible();

    await expect(
      projectsSection.getByText(/technologies/i).first(),
    ).toBeVisible();
  });
});
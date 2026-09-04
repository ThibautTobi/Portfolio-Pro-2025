import { test, expect } from "@playwright/test";

test.describe("sectionHero", () => {
    test("le bouton Voir mes projets dirige vers les projets", async ({ page }) => {
    await page.goto("/#hero");

    await page.getByRole("link", {
        name: "Voir mes projets",
        exact: true,
    }).click();

    await expect(page).toHaveURL(/#projects$/);

    await expect(page.locator("#projects")).toBeVisible();
    });

    test("le bouton Me contacter dirige vers le contact", async ({ page }) => {
    await page.goto("/");

    // Le Hero contient le premier bouton "Me contacter".
    const contactButton = page
        .getByRole("link", {
        name: "Me contacter",
        exact: true,
        })
        .first();

    await contactButton.click();

    await expect(page).toHaveURL(/#contact$/);

    await expect(page.locator("#contact")).toBeVisible();
    });
});
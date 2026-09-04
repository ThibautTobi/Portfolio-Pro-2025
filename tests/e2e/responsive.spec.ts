import { test, expect } from "@playwright/test";

test.describe("Responsive - navigation mobile", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await page.goto("/");
  });

  test("le bouton du menu mobile est visible", async ({ page }) => {
    const menuButton = page.getByRole("button", {
      name: /menu/i,
    });

    await expect(menuButton).toBeVisible();
  });

  test("le menu mobile peut être ouvert", async ({ page }) => {
    const menuButton = page.getByRole("button", {
      name: /menu/i,
    });

    await menuButton.click();

    await expect(menuButton).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  test("le menu mobile peut être fermé", async ({ page }) => {
    const menuButton = page.getByRole("button", {
      name: /menu/i,
    });

    await menuButton.click();

    await expect(menuButton).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await menuButton.click();

    await expect(menuButton).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
  test("un utilisateur mobile peut accéder au contact", async ({ page }) => {
  const menuButton = page.getByRole("button", {
    name: /menu/i,
  });

  await menuButton.click();

    const contactLink = page.getByRole("link", {
    name: "Contact",
    exact: true,
    });

    await contactLink.click();

  await expect(page).toHaveURL(/#contact$/);

  await expect(page.locator("#contact")).toBeVisible();
});

});
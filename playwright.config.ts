import { defineConfig, devices } from "@playwright/test";

/**
 * Configuration globale de Playwright.
 *
 * Cette configuration est utilisée aussi bien :
 * - en développement local ;
 * - dans GitHub Actions ;
 * - éventuellement plus tard dans d'autres outils CI/CD.
 */
export default defineConfig({
  /**
   * Répertoire contenant nos tests E2E.
   */
  testDir: "./tests/e2e",

  /**
   * Permet d'exécuter les tests en parallèle
   * lorsque cela est possible.
   */
  fullyParallel: true,

  /**
   * Empêche accidentellement d'envoyer un test
   * contenant `test.only` dans la CI.
   *
   * En local :
   * test.only est autorisé.
   *
   * Dans GitHub Actions :
   * test.only provoquera une erreur.
   */
  forbidOnly: !!process.env.CI,

  /**
   * Si un test échoue dans GitHub Actions,
   * Playwright pourra le retenter.
   *
   * En local :
   * aucun retry.
   *
   * En CI :
   * 2 tentatives supplémentaires maximum.
   */
  retries: process.env.CI ? 2 : 0,

  /**
   * En CI, on limite le nombre de workers
   * pour éviter de surcharger l'environnement.
   */
  workers: process.env.CI ? 1 : undefined,

  /**
   * Rapport HTML permettant de consulter
   * les résultats des tests.
   */
  reporter: "html",

  /**
   * Configuration utilisée par les navigateurs.
   */
  use: {
    /**
     * URL de base de notre application.
     *
     * Grâce à cela, dans les tests nous pourrons écrire :
     *
     * await page.goto("/");
     *
     * au lieu de :
     *
     * await page.goto("http://localhost:3000/");
     */
    baseURL: "http://127.0.0.1:3000",

    /**
     * Capture une trace lorsqu'un test échoue
     * après un retry.
     *
     * Très utile pour comprendre un problème
     * dans GitHub Actions.
     */
    trace: "on-first-retry",

    /**
     * Capture une capture d'écran uniquement
     * lorsqu'un test échoue.
     */
    screenshot: "only-on-failure",

    /**
     * Enregistre une vidéo uniquement lorsqu'un
     * test est rejoué après un échec.
     */
    video: "on-first-retry",
  },

  /**
   * Navigateur utilisé pour nos tests.
   */
  projects: [
    {
      name: "chromium",

      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  /**
   * Serveur utilisé automatiquement par Playwright
   * avant de lancer les tests.
   *
   * En local :
   * nous utilisons `npm run dev`.
   *
   * Dans GitHub Actions :
   * nous utiliserons `npm run start`.
   *
   * Cela nous permettra de tester également
   * le comportement de la version production.
   */
  webServer: {
    command: process.env.CI ? "npm run start" : "npm run dev",

    url: "http://127.0.0.1:3000",

    /**
     * Temps maximum accordé au serveur
     * pour démarrer.
     */
    timeout: 120_000,

    /**
     * En local, Playwright peut réutiliser
     * un serveur déjà lancé.
     *
     * En CI, il démarre toujours son propre serveur.
     */
    reuseExistingServer: !process.env.CI,
  },
});
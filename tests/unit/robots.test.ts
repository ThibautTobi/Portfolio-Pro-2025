import { describe, expect, it } from "vitest";
import robots from "@/app/robots";

describe("robots", () => {
  it("autorise tous les robots à explorer le site", () => {
    const result = robots();

    expect(result.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
  });

  it("référence le sitemap du site", () => {
    const result = robots();

    expect(result.sitemap).toBe(
      "https://portfolio-pro-2025.vercel.app/sitemap.xml",
    );
  });
});

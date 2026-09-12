import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("combine plusieurs classes", () => {
    expect(cn("text-red-500", "font-bold")).toContain("text-red-500");

    expect(cn("text-red-500", "font-bold")).toContain("font-bold");
  });

  it("gère les classes conditionnelles", () => {
    expect(cn("text-red-500", false && "hidden")).toBe("text-red-500");
  });

  it("résout les classes Tailwind en conflit", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});

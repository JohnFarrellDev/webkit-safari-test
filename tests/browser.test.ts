import { test } from "@playwright/test";

test("test browser", async ({ page }) => {
  // point this to wherever you want
  await page.goto("https://www.johnfarrell.dev/");

  // keep browser open
  await page.pause();
});

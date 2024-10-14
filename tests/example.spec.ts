import { test, expect } from "@playwright/test";
import { LandingPage } from "../page-objects/landingPage";

test("has title", async ({ page }) => {
  await page.goto("");
  const array = page.locator(".col.col--6");

  for (let i = 0; i < (await array.count()); i++) {
    await array.nth(i).click();
  }
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("check steps", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await page.goto("");
  await landingPage.searchInDocs("Locator");

  await expect(page).toHaveTitle(/Locators/);
});

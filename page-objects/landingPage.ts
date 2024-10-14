import { Page } from "@playwright/test";
import { step } from "../decorators/step";
import { TIME } from "../utils/time";

export class LandingPage {
  readonly searchBar = this.page.getByLabel("Search");
  readonly docSearchInput = this.page.locator("#docsearch-input");

  constructor(public page: Page) {}

  @step("Search in documentation")
  async searchInDocs(phrase: string): Promise<void> {
    await this.searchBar.click();
    await this.docSearchInput.click();
    await this.docSearchInput.fill(phrase);
    await this.page.waitForTimeout(TIME.Short);
    await this.docSearchInput.press("Enter");
  }
}

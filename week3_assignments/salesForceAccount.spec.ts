import {expect, test} from "@playwright/test"
import { clear } from "console"

test("Sales Force Account creation",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await expect(page).toHaveTitle("Home | Salesforce")
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home")
    await page.locator(".slds-icon-waffle").click()
    await page.locator("//button[text()='View All']").click()
    await page.getByPlaceholder("Search apps or items...").fill('Service')
    await page.locator(".slds-app-launcher__tile-body.slds-truncate").first().click()
    await page.locator("[href='/lightning/o/Account/home']").click()
    await page.getByRole("button", {name:"New"}).click()
    await page.locator("[name='Name']").fill('Playwright')
    await page.locator("//button[text()='Save']").click()
    await expect(page.locator('.forceToastMessage')).toContainText('was created')
})
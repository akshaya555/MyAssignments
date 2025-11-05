import {expect, test} from "@playwright/test"

test("Automating Alerts", async({page}) => {

page.on("dialog", w3Alert=> {
    console.log("The Alert message is "+w3Alert.message())
    console.log("The type of the alert is "+w3Alert.type())
    w3Alert.accept()
 })
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
const tryFrame= await page.frameLocator("(//iframe)[2]")
tryFrame.locator("//button[text()='Try it']").click()
await expect(tryFrame.locator("//p[contains(text(),'You pressed')]")).toContainText("pressed OK")
})
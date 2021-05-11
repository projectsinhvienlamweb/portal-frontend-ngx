import { browser, by, element, ElementFinder, ExpectedConditions, Key, logging } from 'protractor';
import { AuthPage } from './auth.po';

describe('Amplify Auth', () => {
  let page: AuthPage;

  beforeEach(async () => {
    page = new AuthPage();
    page.addShadowRootSelector();
  });

  it('should display sign in page', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Sign In');
  });

  it('should display amplify login form', async () => {
    await page.navigateTo();
    expect(await element(by.css('amplify-authenticator')).isPresent()).toBeTruthy();
    const username = await page.getUsernameInput();
    expect(username.isPresent()).toBeTruthy();
    const password = await page.getPasswordInput();
    expect(password.isPresent()).toBeTruthy();
    const signIn = await page.getSignInButton();
    expect(signIn.isPresent()).toBeTruthy();
  });

  it('should login success with correct credential', async () => {
    await page.navigateTo();
    const username: ElementFinder = await page.getUsernameInput();
    await username.sendKeys('dev-operator');
    const password: ElementFinder = await page.getPasswordInput();
    await password.sendKeys('DevOperator!@#456');
    await password.sendKeys(Key.ENTER);
    await browser.wait(ExpectedConditions.presenceOf(element(by.css('ngx-pages'))), 10000);
    expect(await page.getTitleText()).toEqual('User Management');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

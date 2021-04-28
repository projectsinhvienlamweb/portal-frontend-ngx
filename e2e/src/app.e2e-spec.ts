import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Hoc Vien Cong Giao', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
  });

  it('should display sign in page', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Sign In');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

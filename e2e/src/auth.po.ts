import { browser, by, element } from 'protractor';

export class AuthPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return browser.getTitle();
  }

  async getUsernameInput() {
    return element(by.css_sr('amplify-authenticator::sr amplify-sign-in::sr amplify-auth-fields::sr amplify-username-field::sr amplify-form-field::sr input#username'));
  }

  async getPasswordInput() {
    return element(by.css_sr('amplify-authenticator::sr amplify-sign-in::sr amplify-auth-fields::sr amplify-password-field::sr amplify-form-field::sr input#password'));
  }

  async getSignInButton() {
    return element(by.css_sr('amplify-authenticator::sr amplify-sign-in::sr amplify-button::sr button[type=submit]'));
  }

  addShadowRootSelector() {
    by.addLocator('css_sr', (cssSelector: string, opt_parentElement, opt_rootSelector) => {
      const selectors = cssSelector.split('::sr');
      if (selectors.length === 0) {
        return [];
      }

      const shadowDomInUse = (document.head['createShadowRoot'] || document.head.attachShadow);
      const getShadowRoot = (el) => ((el && shadowDomInUse) ? el.shadowRoot : el);
      const findAllMatches = (selector: string, targets: any[], firstTry: boolean) => {
        let using, i;
        const submatches = [];
        for (i = 0; i < targets.length; ++i) {
          using = (firstTry) ? targets[i] : getShadowRoot(targets[i]);
          if (using) {
            if (selector === '') {
              submatches.push(using);
            } else {
              Array.prototype.push.apply(submatches, using.querySelectorAll(selector));
            }
          }
        }
        return submatches;
      };

      let matches = findAllMatches(selectors.shift().trim(), [opt_parentElement || document], true);
      while (selectors.length > 0 && matches.length > 0) {
        matches = findAllMatches(selectors.shift().trim(), matches, false);
      }
      return matches;
    });
  }
}

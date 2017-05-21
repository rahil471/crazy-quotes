import { CrazyQuotesPage } from './app.po';

describe('crazy-quotes App', () => {
  let page: CrazyQuotesPage;

  beforeEach(() => {
    page = new CrazyQuotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

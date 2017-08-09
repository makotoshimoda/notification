import { DsAngularPage } from './app.po';

describe('ds-angular App', () => {
  let page: DsAngularPage;

  beforeEach(() => {
    page = new DsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

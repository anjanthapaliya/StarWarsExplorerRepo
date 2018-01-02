import { TestNgAppPage } from './app.po';

describe('test-ng-app App', () => {
  let page: TestNgAppPage;

  beforeEach(() => {
    page = new TestNgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

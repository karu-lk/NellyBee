import { FkPage } from './app.po';

describe('fk App', () => {
  let page: FkPage;

  beforeEach(() => {
    page = new FkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

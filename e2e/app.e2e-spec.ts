import { CodingMafiaCOMP308ProjectPage } from './app.po';

describe('coding-mafia-comp308-project App', function() {
  let page: CodingMafiaCOMP308ProjectPage;

  beforeEach(() => {
    page = new CodingMafiaCOMP308ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

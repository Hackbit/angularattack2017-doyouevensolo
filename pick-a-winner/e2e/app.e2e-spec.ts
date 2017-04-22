import { PickAWinnerPage } from './app.po';

describe('pick-a-winner App', () => {
  let page: PickAWinnerPage;

  beforeEach(() => {
    page = new PickAWinnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

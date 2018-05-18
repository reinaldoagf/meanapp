import { MeanappPage } from './app.po';

describe('meanapp App', function() {
  let page: MeanappPage;

  beforeEach(() => {
    page = new MeanappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { PetbnbPage } from './app.po';

describe('petbnb App', function() {
  let page: PetbnbPage;

  beforeEach(() => {
    page = new PetbnbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

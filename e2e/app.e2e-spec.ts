import { Angular2HelloWordPage } from './app.po';

describe('angular2-hello-word App', function() {
  let page: Angular2HelloWordPage;

  beforeEach(() => {
    page = new Angular2HelloWordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

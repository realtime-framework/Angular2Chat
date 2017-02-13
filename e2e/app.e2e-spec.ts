import { SimpleChatPage } from './app.po';

describe('simple-chat App', function() {
  let page: SimpleChatPage;

  beforeEach(() => {
    page = new SimpleChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

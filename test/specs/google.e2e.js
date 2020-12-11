describe('Google Search Test', () => {

    it('should have the right title', (done) => {
      browser.url('https://google.com/ncr')
      if($('//iframe').isExisting())
      {
      	var my_frame = $('//iframe');
      	browser.switchToFrame(my_frame);
      	$('span=I agree').click()
	  	browser.switchToFrame(null)
      	
      }
      search_box_element = $('[name=\'q\']')
      search_box_element.setValue("BrowserStack")
      $('[name="btnK"]').click();
      expect(browser).toHaveTitle("BrowserStack - Google Search");
    })

})
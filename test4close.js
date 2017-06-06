function closeWindow() {
 var Browser = navigator.appName;
 var indexB = Browser.indexOf('Explorer');

 if (indexB > 0) {
    var indexV = navigator.userAgent.indexOf('MSIE') + 5;
    var Version = navigator.userAgent.substring(indexV, indexV + 1);

    if (Version >= 7) {
        window.open('', '_parent', '');
        window.close();
    }
    else if (Version == 6) {
        window.opener = null;
        window.close();
    }
    else {
        window.opener = '';
        window.close();
    }

 }
else {
    //For NON-IE Browsers except Firefox which doesnt support Auto Close
     try{
                this.focus();
                self.opener = this;
                self.close();
            }
     catch(e){}

      try{
                window.open('','_self','');
                window.close();
            }
      catch(e){}
   }
}

closeWindow();

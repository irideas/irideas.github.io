function closeWindow() {
    var msie = (function() {
        /**
         * documentMode is an IE-only property
         * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
         */
        if (typeof window.document.documentMode == "number") {
            return window.document.documentMode;
        }
        var isLowIE = function(version) {
            if (version >= 10) return false;
            var b = window.document.createElement('b');
            b.innerHTML = '<!--[if IE ' + (version || '') + ']><i></i><![endif]-->';
            return b.getElementsByTagName('i').length === 1;
        };
        var ie;
        for (var i = 9; i > 5; i--) {
            if (isLowIE(i)) {
                ie = i;
                break;
            }
        }
        return ie;
    })();

 if (msie) {
    var indexV = navigator.userAgent.indexOf('MSIE') + 5;
    var Version = navigator.userAgent.substring(indexV, indexV + 1);

    if (msie >= 7) {
        window.open('about:blank', '_parent', '');
        window.close();
    }
    else if (msie == 6) {
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

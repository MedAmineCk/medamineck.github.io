//switch to js files according to device (desk, mobile)
    if (screen && screen.width < 767) {
      document.write(
        '<script type="text/javascript" src="/js/mobile.js"><\/script>'
      );
    } else {
      document.write(
        '<script type="text/javascript" src="/js/main.js"><\/script>'
      );
    }
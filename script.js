var theme = null,
    generateResponse = function(){
      var random = Math.round(Math.random());
      if (random) {
        document.getElementsByTagName('h1')[0].innerHTML  = 'YES';
        if(theme == false) {
          document.getElementsByTagName('body')[0].classList.toggle('green');
          document.getElementsByTagName('body')[0].classList.toggle('red');
        }
        if(theme == null) document.getElementsByTagName('body')[0].classList.toggle('green');
        theme = true;
      }
      else {
        document.getElementsByTagName('h1')[0].innerHTML  = 'NO';
        if(theme) {
          document.getElementsByTagName('body')[0].classList.toggle('red');
          document.getElementsByTagName('body')[0].classList.toggle('green');
        }
        if(theme == null) document.getElementsByTagName('body')[0].classList.toggle('red');
        theme = false;
      }
      document.getElementsByTagName('H6')[0].classList.toggle('not-visible');
      setTimeout(function() { document.getElementsByTagName('H6')[0].classList.toggle('not-visible'); }, 400);
    }

document.getElementsByTagName('button')[0].onclick = generateResponse;
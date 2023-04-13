 alert("good luck. when this window closes the mystery box will start counting down, you have 1 minute to disarm");


 setTimeout(() => {
  alert('You failed to disarm the bomb in time!');
  // Replace this line with code to switch to the death screen
}, 60000);


    function movenose() {
 
      var button = document.querySelector('#button');
      var nose = document.querySelector('#nose');

      nose.setAttribute('animation', 'property: position; to: -5 1 -6; dur: 1000; easing: linear');
      button.setAttribute('animation', 'property: position; to: -3 1.4 -3; dur: 100; easing: linear');
    }

    function move2() {
 
      var button = document.querySelector('#button2');
      var box = document.querySelector('#keybox');

      box.setAttribute('animation', 'property: position; to: 0 1 -4; dur: 1000; easing: linear');
      button.setAttribute('animation', 'property: position; to: -2.65 1 -6; dur: 100; easing: linear');
      
    }


    function final() {

      var key = document.querySelector('#keybox');

      var button3 = document.querySelector('#button3');
  
  
      var keyFound = false;
  
      key.addEventListener('click' , () => {
      
        keyFound = true;
  
        alert('you found the key! press the button quick');
  
      });

      button3.addEventListener('click', () => {
        if (keyFound) {

        button3.setAttribute('animation', 'property: position; to: 0 1.05 0.4; dur: 100; easing: linear');
        alert('you disarmed the bonb!')

        

     
      }

      });

    }


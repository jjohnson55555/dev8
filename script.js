$(document).ready(function() {
  $('#content').hide().fadein(3000);
 var gretting = '[not initialied]';
 var name = '[not initialied]';
 var message = '[not initialied]';
 var welcome = '[not initialied]';
 var sign = '[not initialied]';
  
 var tiles = '[not intialized]'
 var subTotal= '[not intialized]'
 var shipping = '[not intialized]'
 var grandTotal = '[not intialized]'
 
 function iniVars() {
   greeting = 'Howdy';
   name = 'Jaylen';
   message = ', please check your order:';
   welcome = greeting + name + message;
   sign = 'Montague House';
   tiles= sign.length;
   subTotal = tiles * 5;
   shipping = 7;
   grandTotal = subTotal + shipping;
 }
  
 function setTextContentById(getId, setText) {
   var el = document.getElementById(getId);
   el.textContent = setText;
 }
  
  function resetVars(event) {
    var signData = ['greeting', 'userSign', 'tiles', 'shipping', 'subTotal', 'grandTotal'];
    for (var i = 0; i < signData.length; i++) {
      consol.log(i);
      setTextContentById(signData[i], '');
    }
    event.preventDefault();
  }
  
  (function() {
    initVars();
    setTextContentById('greeting', welcome);
    setTextContentById('userSign', sign);
    setTextContentById('tiles', tiles);
    setTextContentById('subTotal', '$' + subTotal);
    setTextContentById('shipping', '$' + shipping);
    setTextContentById('grandTotal', '$' + grandTotal);
    
  }());
  
  var el = document.getElementById('resetButton');
  el.addEventListener('click', resetVars, false);
  
})
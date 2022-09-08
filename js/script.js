// Turn phone number fields in views into tel links
var phoneNumbers = document.querySelectorAll('.field-phone-number');

phoneNumbers.forEach((item, index) => {
  item.innerHTML = '<a href="tel: ' + item.innerHTML + '">' + item.innerHTML + '</a>' ;
});

// Remove inline width and height for iframes
var iframe = document.querySelector("iframe");

if(typeof(iframe) != 'undefined' && iframe != null){
  iframe.removeAttribute("width");
  iframe.removeAttribute("height");
}

// Open image file in a new tab for SIIC Guides
// var guideImages = document.querySelectorAll('img');
// guideImages.forEach((item, index) => {
//   item.addEventListener("click", function() {
//     window.open(this.src);
//   });
// });



// Utility Menu - Mouse Navigation

var translate = document.querySelector(".translate");

translate.addEventListener("click", function() {
  translate.nextElementSibling.classList.add('show-block');
  translate.nextElementSibling.classList.remove('hide');
});

window.addEventListener("click", function(e) {
  if (e.target !== translate) {
    translate.nextElementSibling.classList.add('hide');
    translate.nextElementSibling.classList.remove('show-block');
  }
});

// Utility Menu - Keyboard Navigation
var keyboardTranslate = document.querySelector(".translate");
keyboardTranslate.tabIndex = 0;

keyboardTranslate.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    keyboardTranslate.nextElementSibling.classList.style = "display: block";
  }
});

// When anywhere except menu item is pressed, hide sub menu
window.addEventListener("keypress", function(event) {
  if (event.target !== keyboardTranslate) {
    keyboardTranslate.nextElementSibling.classList.style = "display: none";
  }
});


// Accordions
// https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion__title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion-show");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




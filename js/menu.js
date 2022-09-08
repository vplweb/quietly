// Mega Menu - Mouse Navigation

// Variables
// var menuItems = document.querySelectorAll("#block-quietly-mainnavigation > ul > li > span");
var menuItems = document.querySelectorAll(".main-menu > .menu-item > span");

// Iterate over each menu item using a forEach loop
menuItems.forEach((item, index) => {

  // When menu item is clicked, display sub menu
  item.addEventListener("click", function() {
    console.log(item);
    item.nextElementSibling.style = "display: block";
  });

  // When anywhere except menu item is clicked, hide sub menu
  window.addEventListener("click", function(e) {
    if (e.target !== item) {
      item.nextElementSibling.style = "display: none";
    }
  });

});

// Mega Menu - Keyboard Navigation

// Variables
// var keyboardMenuItems = document.querySelectorAll("#block-quietly-mainnavigation > ul > li");
var keyboardMenuItems = document.querySelectorAll(".main-menu > .menu-item");
keyboardMenuItems.tabIndex = 0;

// Iterate over each menu item using a forEach loop
keyboardMenuItems.forEach((item, index) => {

    // When menu item Enter key is pressed, display sub menu
    item.addEventListener('keypress', function (event) {
      if (event.keyCode === 13) {
        console.log(this);
        this.children[1].style = "display: block";
      }
    });

    // When anywhere except menu item is pressed, hide sub menu
    window.addEventListener("keypress", function(event) {
      if (event.target !== item) {
        this.children[1].style = "display: none";
      }
    });
});
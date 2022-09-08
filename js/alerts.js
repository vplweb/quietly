// https://www.javascripttutorial.net/web-apis/javascript-localstorage
// https://javascript.info/localstorage

var alerts = document.querySelectorAll('.Warning, .Information');
var closeX = document.querySelectorAll('.Warning .close, .Information .close');
        closeX.forEach((item, index) => {
          item.onclick = function() {
            item.parentElement.style.display = "none";
            localStorage.setItem('display', 'none');
          }   
        });

        if (localStorage.display == "none") {
          alerts.forEach((item, index) => {
            item.style.display = localStorage.display;
          });
        }


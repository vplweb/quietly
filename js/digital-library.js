// References:
// http://jsfiddle.net/W4Sup/1
// https://javascript.info/dom-navigation

// Variables
var toggleGridView = document.querySelector(".database-toggle .grid-view-toggle");
var toggleListView = document.querySelector(".database-toggle .list-view-toggle");
var viewContent = document.querySelector(".digital-library-page-view ul");

if (window.screen.width >= 768) {
  viewContent.classList.add("grid-view");
} else {
  viewContent.classList.add("list-view");
}

toggleListView.setAttribute("style","opacity:0.5;");

// Grid View toggle
toggleGridView.onclick = function(){
  viewContent.classList.add("grid-view");
  viewContent.classList.remove("list-view");
  toggleGridView.setAttribute("style","opacity:1");
  toggleListView.setAttribute("style","opacity:0.5;");
}

// List View toggle
toggleListView.onclick = function(){
  viewContent.classList.add("list-view");
  viewContent.classList.remove("grid-view");
  toggleListView.setAttribute("style","opacity:1");
  toggleGridView.setAttribute("style","opacity:0.5;");
}


// When database title is clicked in Grid View

var databaseLinks = document.querySelectorAll(".digital-library-page-view .grid-view .digital-library-page-view__image a");

// Each time database is clicked
databaseLinks.forEach((link, index) => {
  link.addEventListener("click", function(event) {
    // Remove default link behaviour
    event.preventDefault();
    

    function newModal() {
      console.log(link);
      var titleField =  link.parentNode.parentNode.nextElementSibling;
      var bodyField = titleField.nextElementSibling;
      var accessField = bodyField.nextElementSibling;
      var activityField = accessField.nextElementSibling;
      var subjectField = activityField.nextElementSibling;

      var newDiv = document.createElement("div");
      newDiv.className = "modal";

      var newOverlay = document.createElement("div");
      newOverlay.className = "bg-overlay";

      document.getElementsByTagName('body')[0].prepend(newDiv);
      document.getElementsByTagName('body')[0].prepend(newOverlay);

      newDiv.innerHTML = '<div class="close">&times;</div><h2>' + titleField.innerHTML + '</h2>' + bodyField.innerHTML + '<p>' + accessField.innerHTML + '<br>' + activityField.innerHTML + '<br>' + subjectField.innerHTML + '</p>';

      var close = document.querySelector(".close");
      console.log(close)
       close.onclick = function() {
         document.querySelector(".modal").remove();
         document.querySelector(".bg-overlay").remove();
       }

    }

    newModal();

  }, false);

});




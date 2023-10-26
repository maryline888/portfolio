document.addEventListener('DOMContentLoaded', function() {

    function toggle() {
        var toggleButton = document.getElementById("styled");
        if (toggleButton.getAttribute("aria-pressed") == "false") {
          toggleButton.setAttribute("aria-pressed", "true");
        } else {
          toggleButton.setAttribute("aria-pressed", "false");
        }
      }



});
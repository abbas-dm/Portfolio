var Navdiv = document.getElementById("Navbar");
var action = Navdiv.getElementsByClassName("nav-items");
for (var i = 0; i < action.length; i++) {
    action[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
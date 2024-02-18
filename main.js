var currentYear = new Date().getFullYear();
var yearElements = document.getElementsByClassName("year");
for (var i = 0; i < yearElements.length; i++) {
    yearElements[i].innerHTML = currentYear;
}
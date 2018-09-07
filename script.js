function myFunction01() {
   window.alert("function01called");
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function myFunction02() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

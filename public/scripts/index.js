var fullPath = window.location.pathname;
var whatPage = fullPath.split("/").pop();

switch (whatPage) {
    case "index.html":
        document.getElementById("index").style.color = "red";
        break;
    case "about.html":
        document.getElementById("about").style.color = "red";
        break;
    case "contact.html":
        document.getElementById("contact").style.color = "red";
        break;
}
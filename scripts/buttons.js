
function open(pageName) {
    window.location.href = pageName;
}
document.getElementById("news").addEventListener("click", function() {
    open("news.html"); 
});

document.getElementById("order").addEventListener("click", function() {
    open("order.html");
});
document.getElementById("reservation").addEventListener("click", function() {
    open("reservation.html"); 
});
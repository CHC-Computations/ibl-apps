const copyButtons = document.getElementsByName('copy-btn')
copyButtons.forEach(button => {
    button.addEventListener('click', copyText);
});

function tempAlert(msg, duration) {
    var el = document.createElement("div");
    el.setAttribute("style","position:fixed; padding:1rem; top:5%; left:45%; background-color:pink; border-radius:15px;");
    el.innerHTML = msg;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
}
  
function copyText() {
    var elementToCopy = this.parentElement.nextElementSibling;
    navigator.clipboard.writeText(elementToCopy.textContent.trim());
    tempAlert("Skopiowano!", 2000);
}
  
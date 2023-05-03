

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
         tablink.classlist.remove("active-link");
    }
    for (tabcontent of tabcontents) {
         tabcontent.classlist.remove("active-tab");
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementById(tabename).classList.add("active-tab");
}




var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwjBNV0VYfVkpH9WANY_EYbqlFTnq-D8qRfOIZv40PyuQYh6YOggVQpIu6beaAmgMoiKQ/exec'
const form = document.form ['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('sunmit', e =>{
    e.preventDefault()
    fetch(scriptURL, { method: post, body:new formData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
})


 type = "text/javascript" >
window.addEventListener("DOMContentLoaded", function() {
const yourForm = document.getElementById('FORM_ID');
yourForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(yourForm);
    const action = e.target.action;
    fetch(action, {
        method: 'POST',
        body: data,
    }).then(() => {
        window.location.replace('https://script.google.com/macros/s/AKfycbwjBNV0VYfVkpH9WANY_EYbqlFTnq-D8qRfOIZv40PyuQYh6YOggVQpIu6beaAmgMoiKQ/exec')
    })
})
}); 



// Add active class to the current button (highlight it)
var header = document.getElementById("header");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
if (current.length > 0) { 
current[0].className = current[0].className.replace(" active", "");
}
this.className += " active";
});
}


// Search Services
document.getElementById("search").addEventListener("keyup", function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".service-card")
.forEach(card=>{

let title=card.querySelector(".card-title")
.textContent.toLowerCase();

card.style.display=
title.includes(value)
? "block"
: "none";

});

});
""
// Show Booking Form
function selectService(service){

document.getElementById("bookingSection")
.style.display="block";

document.getElementById("serviceName")
.value=service;

document.getElementById("bookingSection")
.scrollIntoView({
behavior:"smooth"
});

}

// Submit Booking
document.getElementById("bookingForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Booking Confirmed Successfully for "
+ document.getElementById("serviceName").value
);

this.reset();

document.getElementById("bookingSection")
.style.display="none";

});
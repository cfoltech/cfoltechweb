// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href'))

.scrollIntoView({

behavior:'smooth'

});

});

});



// Welcome message

window.addEventListener("load",()=>{

console.log("Welcome to CFOL Technologies");

});



// Contact button

document.getElementById("messageBtn")

.addEventListener("click",()=>{

alert(

"Thank you for your interest in CFOL Technologies.\n\nRegistration portal will be available soon."

);

});



// Reveal animation

const cards=document.querySelectorAll('.card,.course');

window.addEventListener('scroll',()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity=1;

card.style.transform='translateY(0)';

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform='translateY(40px)';

card.style.transition='all .6s ease';

});
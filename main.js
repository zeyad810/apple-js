let img =document.getElementById('main')
let container =document.querySelector(".container");
let a=document.querySelectorAll(`nav a`);
let close =document.getElementById('close');
let open = document.getElementById("bar");
let nav =document.getElementById('nav')
let h1  =document.querySelector('h1');
let p=document.querySelector(`p`)
function imgs(src) {
    img.src =src;   
}
function colors(color) {
    document.body.style.backgroundColor= color; 
}
function textDark() {
    document.body.style.color="black";  
    a.forEach((e)=>{
        e.style.color='black'
    })
    h1.style.color='black';
    p.style.color='black';
}
function textLight(){
    if (window.innerWidth < 625) {
        a.forEach((e)=>{
            e.style.color='black'
        })
        h1.style.color='white';
        p.style.color='white';
    }
    else{
    document.body.style.color="#fff" ;
    a.forEach((e)=> {
        e.style.color='#fff '
    })
    }
}
close.onclick=function() {
    nav.style.display='none'
}
open.onclick= function () {
    nav.style.display='inline-block'
}

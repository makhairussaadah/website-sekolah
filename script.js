function toggleMenu(){
document.getElementById("navMenu").classList.toggle("active");
}

document.querySelectorAll(".menu a").forEach(link=>{
link.addEventListener("click",()=>{
document.getElementById("navMenu").classList.remove("active");
});
});

window.addEventListener("scroll", function(){
const header = document.querySelector("header");

if(window.scrollY > 20){
header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.18)";
}else{
header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
}
});

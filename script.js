// FILE: script.js

// Animasi muncul saat halaman dibuka
window.addEventListener("load", function () {
document.body.style.opacity = "1";
});

// Efek scroll navbar
window.addEventListener("scroll", function () {
const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.18)";
}else{
header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
}
});

// Tombol kembali ke atas otomatis
const btnTop = document.createElement("button");
btnTop.innerHTML = "↑";
btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.width = "45px";
btnTop.style.height = "45px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "50%";
btnTop.style.background = "#0f9d58";
btnTop.style.color = "white";
btnTop.style.fontSize = "22px";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";
document.body.appendChild(btnTop);

window.addEventListener("scroll", function(){
if(window.scrollY > 300){
btnTop.style.display = "block";
}else{
btnTop.style.display = "none";
}
});

btnTop.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};

// Tahun otomatis footer
const footer = document.querySelector("footer");
if(footer){
footer.innerHTML = "© " + new Date().getFullYear() + " MA Khairussa'adah Kubu";
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = ( )=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    ThemeToggle.classList.remove("active");
}


//Theme Toogole-------

let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () =>{
    ThemeToggle.classList.toggle("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
   
}




document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) =>{
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--green", color);
    document.querySelector(":root").style.setProperty("--font", color);
  }
});
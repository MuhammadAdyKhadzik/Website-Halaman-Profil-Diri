/* script.js */


/* TYPING EFFECT */

const text = "Muhammad Ady Khadzik";
const typing = document.getElementById("typing");

let index = 0;

function ketik(){

  if(index < text.length){

    typing.innerHTML += text.charAt(index);

    index++;

    setTimeout(ketik,100);
  }

}

ketik();


/* DARK MODE */

const themeBtn = document.getElementById("themeBtn");

/* CEK THEME TERSIMPAN */

if(localStorage.getItem("theme") === "dark"){

  document.body.classList.add("dark");

  themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

}

/* TOGGLE THEME */

themeBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    localStorage.setItem("theme","dark");

    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

  }else{

    localStorage.setItem("theme","light");

    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;

  }

});


/* FORM VALIDATION */

const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if(nama === "" || email === "" || pesan === ""){

    msg.style.color = "red";
    msg.innerText = "Semua field wajib diisi!";
    return;
  }

  if(!email.includes("@")){

    msg.style.color = "red";
    msg.innerText = "Email tidak valid!";
    return;
  }

  msg.style.color = "limegreen";
  msg.innerText = "Pesan berhasil dikirim 🚀";

  form.reset();

});


/* SCROLL ANIMATION */

const scrollElements = document.querySelectorAll(".scroll");

function showScroll(){

  scrollElements.forEach((el)=>{

    const triggerBottom = window.innerHeight * 0.85;

    const top = el.getBoundingClientRect().top;

    if(top < triggerBottom){

      el.classList.add("active");

    }

  });

}

window.addEventListener("scroll",showScroll);

showScroll();

/* DARK MODE */
const modeBtn = document.getElementById("modeBtn");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  modeBtn.innerText = "☀️ Light Mode";
}

modeBtn.addEventListener("click", function(){
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    modeBtn.innerText = "☀️ Light Mode";
    localStorage.setItem("theme","dark");
  }else{
    modeBtn.innerText = "🌙 Dark Mode";
    localStorage.setItem("theme","light");
  }
});


/* TYPING TEXT */
const text = "Muhammad Ady Khadzik";
let i = 0;

function ketik(){
  if(i < text.length){
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik,100);
  }
}

ketik();


/* FORM VALIDASI */
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let nama = document.getElementById("nama").value.trim();
  let email = document.getElementById("email").value.trim();
  let pesan = document.getElementById("pesan").value.trim();

  if(nama === "" || email === "" || pesan === ""){
    msg.style.color = "red";
    msg.innerText = "Semua field wajib diisi!";
    return;
  }

  if(!email.includes("@")){
    msg.style.color = "red";
    msg.innerText = "Format email tidak valid!";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Pesan berhasil dikirim!";
  form.reset();
});

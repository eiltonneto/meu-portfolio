/* Usar uma variável para guardar um valor */
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () =>{

toggleMenu();

});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    
    }else{
        nav.style.display = 'none';
    }
}

// função controladora dos botões dos boxes services
function toggleText(id, event) {
    const text = document.getElementById(id);
    const btn = event.target;
   
    if (text.classList.contains("short")) {
      text.classList.remove("short");
      text.classList.add("expanded");
      btn.innerText = "Read Less";
    } else {
      text.classList.remove("expanded");
      text.classList.add("short");
      btn.innerText = "Read More";
    }
  }

  function toggleText2(id, event) {
    const text = document.getElementById(id);
    const btn = event.target;
   
    if (text.classList.contains("short")) {
      text.classList.remove("short");
      text.classList.add("expanded");
      btn.innerText = "Read Less";
    } else {
      text.classList.remove("expanded");
      text.classList.add("short");
      btn.innerText = "Read More";
    }
  }

  // Modal About
const aboutBtn = document.querySelector(".about-btn");
const aboutModal = document.querySelector(".about-modal");
const aboutClose = document.querySelector(".about-modal-close");

aboutBtn.onclick = (e) => {
  e.preventDefault(); // impede o scroll ao clicar no link
  aboutModal.classList.add("active");
};

aboutClose.onclick = () => {
  aboutModal.classList.remove("active");
};



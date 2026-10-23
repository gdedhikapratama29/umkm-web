const navMenu = document.querySelector('.nav-menu')
const btnMenu = document.querySelector('#btn-menu')

btnMenu.onclick = (e) => {
  e.preventDefault();
  navMenu.classList.toggle('active');
}

document.addEventListener('click', (e) => {
  if (!btnMenu.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
  }
})

const btnCari = document.getElementById("btn-find");
const kotakCari = document.getElementById("kotak-cari")
const teksCari = document.getElementById("teks-cari")

btnCari.onclick = function (e) {
  e.preventDefault();
  kotakCari.classList.toggle("active");
  teksCari.focus();
}

document.addEventListener('click', function(e) {
  if(!btnCari.contains(e.target) && !kotakCari.contains(e.target)) {
    kotakCari.classList.remove('active');
  }
})

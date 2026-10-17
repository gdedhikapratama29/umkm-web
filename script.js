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

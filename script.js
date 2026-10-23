const navMenu = document.querySelector('.nav-menu')
const btnMenu = document.querySelector('#btn-menu')

btnMenu.onclick = (e) => {
  e.preventDefault()
  navMenu.classList.toggle('active')
}

document.addEventListener('click', (e) => {
  if (!btnMenu.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active')
  }
})

const btnCari = document.getElementById('btn-find')
const kotakCari = document.getElementById('kotak-cari')
const teksCari = document.getElementById('teks-cari')

btnCari.onclick = function (e) {
  e.preventDefault()
  kotakCari.classList.toggle('active')
  teksCari.focus()
}

document.addEventListener('click', function (e) {
  if (!btnCari.contains(e.target) && !kotakCari.contains(e.target)) {
    kotakCari.classList.remove('active')
  }
})

const btnCart = document.getElementById('btn-cart')
const cart = document.getElementById('cart')

btnCart.onclick = function (e) {
  e.preventDefault()
  cart.classList.toggle('active')
}

document.addEventListener('click', function (e) {
  if (!btnCart.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove('active')
  }
})

const modalMenu = document.querySelector('.modal-menu')
const modalClose = document.querySelector('.modal-close')
const detailMenu = document.querySelectorAll('.detail-menu')

detailMenu.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault()
    modalMenu.style.display = 'block'
  }
})

modalClose.onclick = (e) => {
  e.preventDefault()
  modalMenu.style.display = 'none'
}

// Select items
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.nav-menu')

// Toggle close and open links
navToggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})

// Select items
const navbar = document.querySelector('.main-nav')

// Fixed Navbar
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height
  if (scrollHeight > navHeight + 150) {
    navbar.style.visibility = 'visible'
  } else {
    navbar.style.visibility = 'hidden'
  }
})

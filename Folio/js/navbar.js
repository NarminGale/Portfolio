// Toggle close and open links
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.nav-menu')

navToggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})

// Fixed Navbar
const navbar = document.querySelector('.main-nav')

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height
  if (scrollHeight > navHeight + 150) {
    navbar.style.visibility = 'visible'
    navbar.style.position = 'fixed'
  } else {
    navbar.style.visibility = 'hidden'
    navbar.style.position = 'absolute'
  }
})

// Smooth scroll
const scrollLinks = document.querySelectorAll('.smoothScroll')

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    // Navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    // Calculate heights
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    let position = element.offsetTop - navHeight

    if (!(navbar.style.position = 'fixed')) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + containerHeight
    }
    window.scrollTo({
      left: 0,
      top: position,
    })

    // close links with toggle
    linksContainer.style.height = 0
  })
})

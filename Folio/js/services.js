const servicesCarousel = document.querySelector('.services-carousel')
const serviceBlocks = document.querySelector(
  '.services-carousel .services-block'
)

function run() {
  servicesCarousel.style.transform = `translateX(${-277.5}px)`
}

setInterval(run, 4000)

servicesCarousel.addEventListener('transitionend', function () {
  servicesCarousel.appendChild(servicesCarousel.firstElementChild)
  servicesCarousel.style.transition = 'none'
  servicesCarousel.style.transform = `translate(0)`
  setTimeout(function () {
    servicesCarousel.style.transition = 'transform 0.3s'
  })
})

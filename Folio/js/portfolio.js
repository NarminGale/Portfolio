const portfolioContainer = document.querySelector('.portfolio-container')
const portfolioItem = document.querySelectorAll('.portfolio-item')

// Visibility for portfolio items' info
portfolioItem.forEach(function (item) {
  item.addEventListener('mouseenter', function (e) {
    e.target.children[1].style.display = 'inline-block'
  })
  item.addEventListener('mouseleave', function (e) {
    e.target.children[1].style.display = 'none'
  })
})

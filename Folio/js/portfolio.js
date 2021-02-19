const portfolio = [
  {
    id: 1,
    title: 'App 1',
    category: 'app',
    img: './images/portfolio/1.png',
    details: './portfolio-details.html',
  },
  {
    id: 2,
    title: 'App 2',
    category: 'app',
    img: './images/portfolio/2.jpeg',
    details: './portfolio-details.html',
  },
  {
    id: 3,
    title: 'App 3',
    category: 'app',
    img: './images/portfolio/3.jpeg',
    details: './portfolio-details.html',
  },
  {
    id: 4,
    title: 'Card 1',
    category: 'card',
    img: './images/portfolio/4.jpeg',
    details: './portfolio-details.html',
  },
  {
    id: 5,
    title: 'Web 1',
    category: 'web',
    img: './images/portfolio/5.jpeg',
    details: './portfolio-details.html',
  },
  {
    id: 6,
    title: 'Web 2',
    category: 'web',
    img: './images/portfolio/6.jpeg',
    details: './portfolio-details.html',
  },
]

const portfolioContainer = document.querySelector('.portfolio-container')

// Display Portfolio items
window.addEventListener('DOMContentLoaded', function () {
  let displayPortfolio = portfolio.map(function (item) {
    return `<div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src=${item.img}
                  alt="image"
                  class="img-fluid"
                />
                <div class="portfolio-info">
                  <h4>${item.title}</h4>
                  <p>${item.category}</p>
                  <a href="" class="venobox preview-link"
                    ><i class="fas fa-plus"></i
                  ></a>
                  <a href=${item.details} class="details-link"
                    ><i class="fas fa-link"></i
                  ></a>
                </div>
              </div>`
  })
  displayPortfolio = displayPortfolio.join('')
  portfolioContainer.innerHTML = displayPortfolio
})

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

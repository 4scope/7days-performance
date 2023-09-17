// navbar slider
const menu = document.getElementById('menu')
const responsiveNav = document.getElementById('responsive-nav')
const closeNav = document.getElementById('close-nav')
const nav = document.getElementsByTagName('nav')

menu.addEventListener('click', function() {
    responsiveNav.classList.add("active")
    closeNav.classList.add('active')
})

closeNav.addEventListener('click', function() {
    responsiveNav.classList.remove('active')
    closeNav.classList.remove('active')
})


// window.addEventListener('scroll', () => {
//     scrollable = nav.scrollHeight  
//     console.log(scrollable)

// })

// sticky navbar

 let sections = document.querySelectorAll('section')
 let stickyNav = document.querySelectorAll('.sticky-nav ul li a')

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY + 250
        let offset = sec.offsetTop - 250
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')
        
        if(top >= offset && top < offset + height) {
            stickyNav.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.sticky-nav ul li a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

// product cards

let cards = document.querySelectorAll('.cards');
let buttons = document.querySelectorAll('.btn-container');

cards.forEach((card, index) => {
    let spans = buttons[index].querySelector("span").querySelectorAll("svg")
    card.addEventListener('mouseover', function () {
        buttons[index].style.background = "#2aa8f8";
        buttons[index].style.color = "#fff";

        spans[0].style.display = "none"
        spans[1].style.display = "block"
        // buttons[index].querySelector("span").style.color = "#fff"
  });

    card.addEventListener('mouseout', function () {
        buttons[index].style.background = "initial";
        buttons[index].style.color = "#2aa8f8";

        spans[0].style.display = "block"
        spans[1].style.display = "none"
    });
});


// preloader

let preloader = document.getElementById('preloader')

window.addEventListener('load', () => {
    preloader.style.display = 'none'
})
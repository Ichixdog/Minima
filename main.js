let links = document.querySelectorAll(".menu-item > a")
for(let i = 0; i < links.length; i++){
  links[i].onclick = () =>{
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
  }
}

document.querySelector(".header > a").onclick = () => {
  document.getElementById("home").scrollIntoView({behavior: "smooth"})
}

document.querySelector(".header-contact").onclick = () => {
  document.getElementById("contact").scrollIntoView({behavior: "smooth"})
}

document.querySelector(".button-to-contact").onclick = () => {
  document.getElementById("contact").scrollIntoView({behavior: "smooth"})
}

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let message = document.getElementById("message")

document.getElementById("button").onclick = () => {
  [firstName, lastName, email, message].forEach(item =>{
    item.value = ""
  })
  alert("We will contact with you soon")
}

$(".slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:
    '<svg class="prev-arrow arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" /></svg>',
  nextArrow:
    '<svg class="next-arrow arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" /></svg>',
});

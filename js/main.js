let explenationContainer = document.querySelectorAll('.game');
let questionCOntainer = document.querySelectorAll('.top');
let arrow = document.querySelectorAll('.arrow');

let burgerMenu = document.querySelector('.burger');
let navLinks = document.querySelector('.navigation-links');
console.log(burgerMenu);
console.log(navLinks);

burgerMenu.onclick = () => {
  console.log("hello")
  navLinks.classList.toggle('is-active');
};

  
 //  Add css class to oped dropdown
for (let i=0; i<questionCOntainer.length; i++){
  questionCOntainer[i].onclick = function () {
    explenationContainer[i].classList.toggle('is-active');
    arrow[i].classList.toggle('rotate');
  };
}








  
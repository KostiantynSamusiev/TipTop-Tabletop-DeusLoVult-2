let explenationContainer = document.querySelectorAll('.game');
let questionCOntainer = document.querySelectorAll('.top');
let arrow = document.querySelectorAll('.arrow');



let burgerMenu = document.querySelector('.burger');
let navLinks = document.querySelector('.navigation-links');


burgerMenu.onclick = () => {
  navLinks.classList.toggle('is-active');
};

  
 //  Add css class to oped dropdown
for (let i=0; i<questionCOntainer.length; i++){
  questionCOntainer[i].onclick = function () {
    explenationContainer[i].classList.toggle('is-active');
    arrow[i].classList.toggle('rotate');
  };
}


//  Carousel slider
$('.games_card_container').slick({
  infinite: true,
  centerMode: false,
  variableWidth: true,
  slidesToShow: 2,
  slidesToScroll: 1
});

$(document).on('click', '.main-btn', function(e){
  $(this).toggleClass('active');
  $('.btn-cont').toggleClass('active');
});







  
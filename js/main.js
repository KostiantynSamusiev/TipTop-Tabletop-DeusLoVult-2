let explenationContainer = document.querySelectorAll('.game'),
    questionCOntainer = document.querySelectorAll('.top'),
    arrow = document.querySelectorAll('.arrow'),
    burgerMenu = document.querySelector('.burger'),
    gameCard = document.querySelectorAll('.game_card'),
    navLinks = document.querySelector('.navigation-links'),
    picture = document.querySelectorAll('.gallery__img');

//Burger menu
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


// Scrolling for game card
for (let i=0; i<gameCard.length; i++)
  gameCard[i].onclick = function () {
    if (gameCard[i].id == "game-card1"){
      window.scrollTo({
        left:0,
        top: 1500,
        behavior: "smooth"});
    } else if (gameCard[i].id == "game-card2"){
      window.scrollTo({
        left:0,
        top: 1580,
        behavior: "smooth"});
    } else if (gameCard[i].id == "game-card3") {
      window.scrollTo({
        left:0,
        top: 1660,
        behavior: "smooth"});
    } else if (gameCard[i].id == "game-card4") {
      window.scrollTo({
        left:0,
        top: 1740,
        behavior: "smooth"});
    }

      explenationContainer[i].classList.toggle('is-active');
      arrow[i].classList.toggle('rotate');
      



      if (window.screen.width >= 768 && window.screen.height >= 618) {
        if (gameCard[i].id == "game-card1"){
          window.scrollTo({
            left:0,
            top: 2320,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card2"){
          window.scrollTo({
            left:0,
            top: 2450,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card3") {
          window.scrollTo({
            left:0,
            top: 2580,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card4") {
          window.scrollTo({
            left:0,
            top: 2710,
            behavior: "smooth"});
        }
      }
      if (window.screen.width >= 1080 && window.screen.height >= 824) {
        if (gameCard[i].id == "game-card1"){
          window.scrollTo({
            left:0,
            top: 2290,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card2"){
          window.scrollTo({
            left:0,
            top: 2420,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card3") {
          window.scrollTo({
            left:0,
            top: 2550,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card4") {
          window.scrollTo({
            left:0,
            top: 2680,
            behavior: "smooth"});
        }
      }
      if (window.screen.width >= 1600) {
        if (gameCard[i].id == "game-card1"){
          window.scrollTo({
            left:0,
            top: 2080,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card2"){
          window.scrollTo({
            left:0,
            top: 2220,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card3") {
          window.scrollTo({
            left:0,
            top: 2350,
            behavior: "smooth"});
        } else if (gameCard[i].id == "game-card4") {
          window.scrollTo({
            left:0,
            top: 2470,
            behavior: "smooth"});
        }
      }

     
}



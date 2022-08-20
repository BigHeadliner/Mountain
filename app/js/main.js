// $(function () {

   const hamburger = document.getElementById('menu__btn');
   const headerMenu = document.getElementById('menu__list');
   const menuLink = document.querySelectorAll('.menu__link');


    hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('menu__list--active');
    hamburger.classList.toggle('menu__btn--open');
})

   menuLink.forEach(link => {
     link.addEventListener('click', () => {
       headerMenu.classList.remove('menu__list--active');
       hamburger.classList.remove('menu__btn--open');
     })
   })

 
$('.climb-tabs__link').on('click', function(e){ 
    e.preventDefault(); 
    $('.climb-tabs__link').removeClass('climb-tabs__link--active');   
    $(this).addClass('climb-tabs__link--active'); 
     
    $('.tabs-content,.tabs-content1').removeClass('tabs-content--active');  
    $($(this).attr('href')).addClass('tabs-content--active');  
    console.log('click works !')
  });  
 
$('.history-photo__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
})
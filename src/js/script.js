const slides=document.querySelectorAll('.carousele__slide'),
      prev=document.querySelector('.prev'),
      next=document.querySelector('.next');

let slideIndex = 1;

function showSlides(n) {
    if (n>slides.length){
        slideIndex=1;
    }

    if (n<1){
        slideIndex=slides.length;
    }

    slides.forEach(item => item.style.display = 'none');

    slides[slideIndex-1].style.display = 'block';
}
showSlides(slideIndex);

next.addEventListener('click', () => {
    slideIndex++;
    showSlides(slideIndex);
});

prev.addEventListener('click', () => {
    slideIndex--;
    showSlides(slideIndex);
});

const toogleContent = document.querySelectorAll('.catalog-item_link'),
      content  = document.querySelectorAll('.catalog-item__content'),
      list  = document.querySelectorAll('.catalog-item__list');
     

toogleContent.forEach(item=>{
    item.addEventListener('click', (i)=>{
        i.preventDefault();
        content.forEach(item=>{
            item.classList.toggle('catalog-item__content_active');
        });
        list.forEach(item=>{
            item.classList.toggle('catalog-item__list_active');
        });
    });
});

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      new WOW().init();
  });


const btnConsultations = document.querySelectorAll('[data-modal]'),
    btnOrders = document.querySelectorAll('.button_mini'),
    btnBuy = document.querySelectorAll('.button__submit'),
    overlay = document.querySelector('.overlay'),
    modalClose = document.querySelectorAll('.modal__close'),
    modalConsultation = document.querySelector('#consultation'),
    modalOrder = document.querySelector('#order'),
    modalThanks = document.querySelector('#thanks');


btnConsultations.forEach ( (e)=>{
    e.addEventListener('click', ()=>{
        overlay.style.display='block';
        modalConsultation.style.display='block';
    });
});

btnOrders.forEach ( (e)=>{
    e.addEventListener('click', ()=>{
        overlay.style.display='block';
        modalOrder.style.display='block';
    });
});

modalClose.forEach(  (e)=> {
    e.addEventListener('click', ()=>{
        overlay.style.display='none';
        modalConsultation.style.display='none';
        modalOrder.style.display='none';
        modalThanks.style.display='none';
    });
});

btnBuy.forEach ( (e)=>{
    e.addEventListener('click', ()=>{
        overlay.style.display='block';
        modalOrder.style.display='none';
        modalThanks.style.display='block';
    });
});

 // Smooth scroll and pageup

 $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});






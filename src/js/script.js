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


$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
  });



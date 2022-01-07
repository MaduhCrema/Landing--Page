const menu = document.querySelector('#btMenu');
const header = document.querySelector('.header');
const overMenu = document.querySelector('.overMenu');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

menu.addEventListener('click', function(){
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
          });
    }else{
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
          });
    }
});
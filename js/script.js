const menuBurger = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list ');
const loginIcon = document.querySelector('.login__icon'); 
const loginList = document.querySelector('.login__list ');
const crossButton = document.querySelector('.menu__cross');
 

menuBurger.onclick = function() {
    headerList.classList.toggle('display__none');
}

loginIcon.onclick = function() {
    loginList.classList.toggle('display__none');
}

crossButton.onclick = function() {
    headerList.classList.toggle('display__none');
}
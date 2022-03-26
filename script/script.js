'use strict';

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

const overlay = document.querySelector('.overlay');
const aboutMe = document.querySelector('.aboutMe');
const showModal = document.querySelector('.modal');
const btnModal = document.querySelector('.close-modal');

function overlayShow() {
 overlay.classList.remove('hidden');
}

function overlayHidden() {
  overlay.classList.add('hidden');
  showModal.classList.add('hidden');
}

function modalShow() {
  showModal.classList.remove('hidden');
}

function modalHidden() {
  showModal.classList.add('hidden');
  overlay.classList.add('hidden');
}

aboutMe.addEventListener('click', modalShow);
btnModal.addEventListener('click', modalHidden)
aboutMe.addEventListener('click', overlayShow);
overlay.addEventListener('click', overlayHidden)



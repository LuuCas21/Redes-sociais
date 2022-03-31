'use strict';

// Links das Redes Sociais

const linkedin = document.querySelector('#Linkedin');
const instagram = document.querySelector('#Instagram');
const gitHub = document.querySelector('#GitHub');
const telegram = document.querySelector('#Telegram');

const linkedin2 = document.querySelector('.fa-linkedin');
const instagram2 = document.querySelector('.fa-instagram');
const github2 = document.querySelector('.fa-github');

linkedin.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/lucassouza200/');
});

instagram.addEventListener('click', function() {
    window.open('https://www.instagram.com/luucas21__/');
});

gitHub.addEventListener('click', function() {
    window.open('https://github.com/LuuCas21');
});

telegram.addEventListener('click', function() {
    window.open('https://t.me/LuuCas200');
});

const anchorLinkedin = function() {
    window.open('https://www.linkedin.com/in/lucassouza200/');
}

const anchorInstagram = function() {
    window.open('https://www.instagram.com/luucas21__/');
}

const anchorGitHub = function() {
    window.open('https://github.com/LuuCas21');
}

const anchorTelegram = function() {
    window.open('https://t.me/LuuCas200');
}

const anchorEmail = function() {
    window.location.href = 'mailto:Tchango7000@gmail.com';
}
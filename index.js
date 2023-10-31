const bar = document.querySelector('#side-bar');
const button = document.querySelector('#btn');
const page = document.querySelector('.content');

button.addEventListener('click', function() {
    bar.classList.toggle('opened');
});

page.addEventListener('click', function() {
    bar.classList.remove('opened');
})
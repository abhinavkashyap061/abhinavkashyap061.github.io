const myButton = document.querySelector('#upward-button');

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

myButton.addEventListener('click', function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
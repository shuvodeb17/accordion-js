var header = document.getElementById('header');
var plusIcon = document.getElementById('plus');
var minusIcon = document.getElementById('minus');
var cardBody = document.getElementById('card-body');
plusIcon.addEventListener('click', function(){
    cardBody.classList.toggle('open');
    plusIcon.style.backgroundColor = 'green';
});

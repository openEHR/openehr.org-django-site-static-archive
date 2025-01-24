let box_search = document.getElementById('search'),
box_affiliate = document.getElementById('affiliate'),
btn_search = document.querySelector('.btn--search'),
btn_affiliate = document.querySelector('.btn--affiliate');

btn_search.addEventListener('click', function (){
if (box_search.classList.contains("hidden")) {
    box_search.classList.remove('hidden');
}
else {
    box_search.classList.add('hidden');
}
});
btn_affiliate.addEventListener('click', function (){
if (box_affiliate.classList.contains("hidden")) {
    box_affiliate.classList.remove('hidden');
}
else {
    box_affiliate.classList.add('hidden');
}
});
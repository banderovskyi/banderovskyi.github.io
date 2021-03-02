// $(function (){
//     alert("Text");
// });

const searchInput = document.querySelector('.search-form input'),
    searchList = document.querySelector('.search-list');

console.log(searchList, searchInput);

searchInput.addEventListener('focus', () => {
    searchList.style.display = 'block';
    console.log(searchList);
});

searchInput.addEventListener('blur', () => {
    searchList.style.display = 'none';
    console.log(searchList);
});


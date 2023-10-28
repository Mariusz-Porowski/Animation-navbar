const btn = document.querySelector('.search-btn')
const input = document.querySelector('input')

const showSearchBar = () => {
    input.classList.toggle('active')
}

btn.addEventListener('click', showSearchBar)
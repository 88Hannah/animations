const container = document.querySelector('.container');


const handleClick = () => {
    container.classList.add('open');
}


container.addEventListener('click', handleClick);
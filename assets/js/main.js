function menuMobile() {
    const btnMenu = document.getElementById('close-menu');
    const menuTxt = document.getElementById('menu-mobile');
    const menu = document.querySelector('.menu')
    let click = 0;
    btnMenu.addEventListener('click', () => {

        if (click % 2 === 0) {
            menu.style.display = 'flex';
            menu.classList.add('entradaMenu');
            menuTxt.classList.add('entradaTxt');
            menu.classList.remove('saidaMenu');
            menuTxt.classList.remove('saidaTxt');
            btnMenu.innerText = '×'


        }
        if (click % 2 === 1) {
            menu.classList.remove('entradaMenu');
            menu.classList.add('saidaMenu');
            menuTxt.classList.add('saidaTxt');
            menuTxt.classList.remove('entradaTxt');
            btnMenu.innerText = '☰'

        }
        click++;
    })
}

menuMobile();





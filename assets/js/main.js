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

function scrollAnimation() {
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    const windowTop = window.innerHeight * 0.5;



    window.addEventListener('scroll', (e) => {

        target.forEach((e) => {
            if (e.getBoundingClientRect().top - windowTop < 120) {
                e.classList.add(animationClass)
            } else {
                e.classList.remove(animationClass)
            }
        })
    })


}

scrollAnimation()

menuMobile();





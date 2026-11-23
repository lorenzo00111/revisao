function openMenu(){
    var abrirMenu = document.getElementById('menu-mobile')
    abrirMenu.style.display = 'flex'
    abrirMenu.setAttribute('aria-hidden', 'false')
    var sanduiche = document.getElementById('wrap-open')
    sanduiche.style.display = 'none'
}

function fechar(){
    var abrirMenu = document.getElementById('menu-mobile')
    abrirMenu.style.display = 'none'
    abrirMenu.setAttribute('aria-hidden', 'true')
    var sanduiche = document.getElementById('wrap-open')
    sanduiche.style.display = 'flex'
}

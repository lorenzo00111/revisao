function openMenu(){
    var abrirMenu = document.getElementById('menu-mobile')
    abrirMenu.style.display = 'flex'
    var sanduiche = document.getElementById('wrap-open')
    sanduiche.style.display = 'none'
}

function fechar(){
    var abrirMenu = document.getElementById('menu-mobile')
    abrirMenu.style.display = 'none'
    var sanduiche = document.getElementById('wrap-open')
    sanduiche.style.display = 'flex'
}

function enviar(){
    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto').value
    //console.log(nome,assunto)
    const msg = `Gostaria de entrar em contato!\n \nNome:${nome}/nAssunto: $(assunto)`
    const msgTranformada = encodeURIComponent(msg)
    window.open(`https://wa.me/5541999999999?text=${msgTranformada}`)
    console.log(nome,assunto)
}
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

function enviar(event) {
    event.preventDefault()

    const nomeInput = document.getElementById('nome')
    const assuntoInput = document.getElementById('assunto')
    const nome = nomeInput.value.trim()
    const assunto = assuntoInput.value.trim()
    const nomeError = document.getElementById('nome-error')
    const assuntoError = document.getElementById('assunto-error')

    nomeError.textContent = nome ? '' : 'Informe seu nome.'
    assuntoError.textContent = assunto ? '' : 'Informe sua mensagem.'
    nomeInput.setAttribute('aria-invalid', nome ? 'false' : 'true')
    assuntoInput.setAttribute('aria-invalid', assunto ? 'false' : 'true')

    if (!nome || !assunto) {
        const invalidField = !nome ? nomeInput : assuntoInput
        invalidField.focus()
        return
    }

    const msg = `Olá! Gostaria de entrar em contato.\n\nNome: ${nome}\nMensagem: ${assunto}`
    const msgTransformada = encodeURIComponent(msg)
    window.open(`https://wa.me/5541999999999?text=${msgTransformada}`, '_blank', 'noopener,noreferrer')
}
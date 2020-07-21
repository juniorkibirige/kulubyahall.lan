let dIP = null
const iB = document.getElementById('installer')
const i = document.getElementsByClassName('ins')[0]
iB.addEventListener('click', installP)
iB.classList.remove('available')
window.addEventListener('beforeinstallprompt', dP)
window.addEventListener('appinstalled', logAppInstalled);
iB.classList.remove('available')

function dP(e) {
    dIP = e
    iB.classList.add('available')
    i.removeAttribute('style')
    $('.ins').toast('show')
}

function installP (e) {
    iB.classList.remove('available')
    $('.ins').toast('hide')
    dIP.prompt()
    logR()
}

function logR () {
    dIP.userChoice
    .then( c => {
        if(c.outcome === 'accepted') {
            setCookie('stat3', '[Offline Server]: Installed.', 1)
            checkCookie('stat3')
        } else {
            setCookie('stat4', '[Offline Server] User dismissed install.', 1)
            checkCookie('stat4')
        }
        dIP = null
    })
}

function logAppInstalled (e) {
    setCookie('stat5', 'Kulubya Hall App was installed.', 1)
    checkCookie('stat5')
}
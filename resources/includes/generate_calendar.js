let today = new Date()
let cm = today.getMonth()
let cy = today.getFullYear()

let mth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let my = document.getElementById('my')
getEvents()
let bg = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info']
let cl = ['text-white']

function showCal(m, y, e, col) {
    let fd = (new Date(y, m)).getDay()
    let dim = 32 - new Date(y, m, 32).getDate()
    let cal = document.getElementById('cb')
    cal.innerHTML = ''
    my.innerHTML = mth[m] + " " + y
    let d = 1
    let et = e
    for (let i = 0; i < 5; i++) {
        let r = document.createElement('tr')
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < fd) {
                let c = document.createElement('td')
                let ct = document.createTextNode('')
                c.appendChild(ct)
                r.appendChild(c)
            } else if (d > dim) {
                while (j < 7 && j != 0) {
                    let c = document.createElement('td')
                    let ct = document.createTextNode('')
                    c.appendChild(ct)
                    r.appendChild(c)
                    j++
                }
                break
            } else {
                let c = document.createElement('td')
                let ct = document.createTextNode(d)
                c.appendChild(ct)
                let i = 0
                e.forEach(element => {
                    if (parseInt(element) == d) {
                        c.classList.add(col[i])
                        c.classList.add(cl[0])
                    }
                    i++
                    i >= col.length ? i = 0 : 0
                })
                if (d === today.getDate() && y === today.getFullYear() && m === today.getMonth()) {
                    c.classList.add('evt')
                }
                r.appendChild(c)
                d++
            }
        }
        cal.appendChild(r)
    }
    makeEventCards(m,y,e.col)
}
function getEvents() {
    $.ajax({
        url: '/resources/static/txt/events.txt',
        success: (data) => {
            let title = []
            let col = []
            let date = []
            let i = 0
            txt = data.split('\n')
            txt.pop()
            sort(txt)
            if (data.toString() != '') {
                txt.forEach(text => {
                    title.push(text.split(' ')[0].replace('\#', '').replace('\_', ' '))
                    date.push(text.split(' ')[1])
                    col.push(bg[i])
                    i++
                });
            }
            // console.log(date)
            makeKey(title, date, col)
        }
    })
}

makeKey = (t, d, c) => {
    let tev = document.getElementById('tev')
    let fr = document.createElement('tr')
    let fc = document.createElement('th')
    fc.classList.add('evt')
    fr.appendChild(fc)
    let ft = document.createElement('th').appendChild(document.createTextNode('Today'))
    fr.appendChild(ft)
    fr.appendChild(document.createElement('th'))
    tev.appendChild(fr)
    if (t.length != 0 && d.length != 0) {
        let i = 0
        let ev = []
        let h = []
        d.pop()
        t.pop()
        t.forEach(title => {
            if (d[i].split('-')[1] == (cm + 1)) {
                let r = document.createElement('tr')
                let cc = document.createElement('td')
                cc.classList.add(c[i])
                h.push(c[i])
                r.appendChild(cc)
                let ct = document.createElement('td')
                let ctt = document.createTextNode(t[i])
                ct.appendChild(ctt)
                let cd = document.createElement('td')
                let cdd = document.createTextNode(d[i].split('-')[0])
                cd.appendChild(cdd)
                r.appendChild(ct)
                r.appendChild(cd)
                tev.appendChild(r)
                ev.push(d[i].split('-')[0])
            }
            i++
        });
        showCal(cm, cy, ev, h)
    } else {
        let r = document.createElement('tr')
        let c = document.createElement('td')
        c.id = 'no-event'
        c.setAttribute('colspan', 3)
        c.classList.add('text-center')
        c.classList.add('p-2')
        c.appendChild(document.createTextNode('No Events This Month'))
        r.appendChild(c)
        tev.appendChild(r)
        showCal(cm, cy, [], [])
    }
}

makeEventCards = () => {
    console.log('Cards made');
    // <div class="card">
    //     <div class="card-header align-self-center" style="width: 75% !important; padding: 3px 5px !important;"></div>
    //     <div class="card-body"></div>
    // </div>    
}
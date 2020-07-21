getText = _ => {
    $.ajax({
        url: '../static/txt/speeches.txt',
        success: (data) => {
            text = data.split('\n')
            t = 0
            var titles = [], body = [], tbody = []
            text.forEach(line => {
                if (line.match('\#') == '#') {
                    tbody.length != [] ? body.push(tbody) : 0
                    tbody = []
                    titles.push(line.replace('\#', ''))
                    t++
                } else {
                    tbody.push(line)
                }
            });
            body.push(tbody)
            processData(titles, body)
        },
    })
    // $('.exec-board').before(

    // )
}
data = ''
img = ['/resources/static/images/warden.jpg', '/resources/static/images/custodian.jpg', '/resources/static/images/gorvernor.jpg','/resources/static/images/grc.jpg']
alt = ['Warden`s Image','Custodian`s Image','Gorvernor`s Image','GRC`s Image']
var global = this
processData = (t, b) => {
    t.forEach(title => {
        i = t.indexOf(title)
        let folkloreblock = '<div class="container-fluid" style="margin-top: 3em;"><div class="row"><div class="col"><img data-src="'+img[i]+'" alt="'+alt[i]+'" style="width: 8em; height: 8em; top: -80px; right: 45px;" class="lazyload img-circle float-right position-relative"><p class="jumbotron container" style="padding-top: 0px !important;"><span class="word-title position-relative" style="right: 1rem;">'+title+'</span><br/>'+b[i].join('<br/>')+'</p></div></div></div>';
        // folkloreblock.replace('/\{title\}/', title.toString())
        global.data = data.concat(folkloreblock)
    });
    // console.log(global.data)
    $('.exec-board').before(global.data)
}
getText()

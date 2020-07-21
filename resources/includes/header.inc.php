<noscript>Please enable javascript in your browser</noscript>
<script src="/resources/static/js/hashcheck.js" type="module">
<div class="row fixed-top">
    <nav class="col-sm-12 navbar navbar-expand-lg navbar-dark bg-dark mx-2">
        <a class="navbar-brand text-info" href="/">KULUBYA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- This is the list where the nav tabs go -->
            <ul class="navbar-nav mr-auto col-sm-6 col-md-6 col-lg-6">
                <li class="nav-item" id="home">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item" id="folklore">
                    <a class="nav-link" href="/resources/folklore/">Folklore</a>
                </li>
                <li class="nav-item" id="events">
                    <a class="nav-link" href="/resources/events/">Events</a>
                </li>
                <li class="nav-item" id="gallery">
                    <a class="nav-link" href="/resources/gallery/">Gallery</a>
                </li>
                <li class="nav-item" id="cont_us">
                    <a class="nav-link" href="/resources/contact_us/">Contact_us</a>
                </li>
            </ul>
            <ul class="navbar-nav mr-auto col-sm-6 col-md-6 col-lg-6">
                <li class="nav-item" id="appUse">
                    <a href="javascript:void(0)" class="nav-link"></a>
                </li>
            </ul>
        </div>
    </nav>
</div>
<script>
    let url = document.baseURI
    uri = url.split('/')
    if(uri[uri.length - 2] == 'folklore'){
        $('#folklore').addClass('active')
    } else if(uri[uri.length - 2] == 'about'){
        $('#about').addClass('active')
    }else if(uri[uri.length - 2] == 'kulubyahall.lan') {
        $('#home').addClass('active')
    }else if(uri[uri.length - 2] == 'events') {
        $('#events').addClass('active')
    }else if(uri[uri.length - 2] == 'gallery') {
        $('#gallery').addClass('active')
    }else if(uri[uri.length - 2] == 'contact_us') {
        $('#cont_us').addClass('active')
    }
</script>

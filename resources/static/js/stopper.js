$("html").on("contextmenu", (e) => {
    // e.preventdefault()
    alert("Context Menu is Disabled by Admin")
})
jQuery(document).ready(function () {
    function n() {
        return !1
    }
    function e(n) {
        var e = o ? n : event,
            t = o ? e.which : e.button;
        return 2 == t || 3 == t ? !1 : void 0
    }
    var t = !1;
    document.onkeyup = function (n) {
        17 == n.which && (t = !1)
    },
        document.onkeydown = function (n) {
            return 17 == n.which && (t = !0),
                t === !0 ? !1 : void 0
        };
    var o = 'Netscape' == navigator.appName ? 1 : 0;
    'Netscape' == navigator.appName && document.addEventListener('click', _ => {

    }),
        document.oncontextmenu = n,
        document.onmousedown = e,
        document.onmouseup = e
})

console.log("Please avoid from using these developer tools, they are corrupt and you pose a risk of obtaining a virus if you use the developer tools. \n From The Google Chrome Team")
if (!navigator.onLine) {
    setCookie('stat', 'Your offline currently, and <br> only available resources can be accessed!', 1)
    checkCookie()
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname = 'stat') {
    var username = getCookie(cname);
    if (username != "") {
        // console.log(username)
        if (cname == 'stat') {
            div = '<div role="alert" aria-live="assertive" aria-atomic="true" class="toast offline" data-autohide="false"><div class="toast-header"><img src="/resources/icons/webapp-icon-32.png" class="rounded mr-2" alt="..."><strong class="mr-auto">Kulubya Hall</strong><small class="text-muted time-1">just now</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="toast-body">' + username + '</div></div>'
            $('.ins').after(div)
            $('.offline').toast('show')
            setCookie(cname, "", 0)
        } else if (cname == 'stat1') {
            div = '<div role="alert" aria-live="assertive" aria-atomic="true" class="toast stat1" data-delay="5000"><div class="toast-header"><img src="/resources/icons/webapp-icon-32.png" class="rounded mr-2" alt="..."><strong class="mr-auto">Kulubya Hall</strong><small class="text-muted time-1">just now</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="toast-body">' + username + '</div></div>'
            $('.ins').after(div)
            $('.stat1').toast('show')
            setCookie(cname, "", 0)
        } else if (cname == 'stat2') {
            div = '<div role="alert" aria-live="assertive" aria-atomic="true" class="toast stat2" data-autohide="false"><div class="toast-header"><img src="/resources/icons/webapp-icon-32.png" class="rounded mr-2" alt="..."><strong class="mr-auto">Kulubya Hall</strong><small class="text-muted time-1">just now</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="toast-body">' + username + '</div></div>'
            $('.ins').after(div)
            $('.stat2').toast('show')
            setCookie(cname, "", 0)
        } else if (cname == 'stat3') {
            div = '<div role="alert" aria-live="assertive" aria-atomic="true" class="toast stat3" data-autohide="false"><div class="toast-header"><img src="/resources/icons/webapp-icon-32.png" class="rounded mr-2" alt="..."><strong class="mr-auto">Kulubya Hall</strong><small class="text-muted time-1">just now</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="toast-body">' + username + '</div></div>'
            $('.ins').after(div)
            $('.stat3').toast('show')
            setCookie(cname, "", 0)
        } else if (cname == 'stat4') {
            div = '<div role="alert" aria-live="assertive" aria-atomic="true" class="toast stat4" data-autohide="false"><div class="toast-header"><img src="/resources/icons/webapp-icon-32.png" class="rounded mr-2" alt="..."><strong class="mr-auto">Kulubya Hall</strong><small class="text-muted time-1">just now</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="toast-body">' + username + '</div></div>'
            $('.ins').after(div)
            $('.stat4').toast('show')
            setCookie(cname, "", 0)
        } else if (cname == 'stat5') {
            div = '<div role="alert" aria-live="assertive" aria-atomic="true" class="toast stat5" data-autohide="false"><div class="toast-header"><img src="/resources/icons/webapp-icon-32.png" class="rounded mr-2" alt="..."><strong class="mr-auto">Kulubya Hall</strong><small class="text-muted time-1">just now</small><button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="toast-body">' + username + '</div></div>'
            $('.ins').after(div)
            $('.stat5').toast('show')
            setCookie(cname, "", 0)
        }
        return true
    } else {
        return false
    }
}

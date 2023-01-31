var cookiename='SDCscPrivacy';
var privacyname='privacyBottomBar';

function ActionCookie() {
        //var r = confirm("請問您同意我們的Privacy政策嗎?");
        //if (r == true) {
        setCookie(cookiename, '1', 2);
        $('#'+privacyname).parent().hide();
        $('.blur-box').removeClass('blur');
        $('body').css('overflow-y', 'initial');
        /*Bootstrap Modal 專用語法*/
        $('#exampleModalCenter').removeClass('show').css({'display':'none'});
        $('.modal-backdrop').remove();
        //}
}
function RedirectIndex(){
        location.href='index.html';
}
function HideArea() {
        $('#'+privacyname).parent().hide();
}

function ActionCookie2() {
        setCookie(cookiename, '1', 2);
        top.frames.location.href = 'https://www.sdms.com.tw/';
}
var pathname = location.pathname.toLowerCase();
if(pathname.indexOf('.html')===-1)
        pathname+='index.html';

if (getCookie(cookiename) == null) {
        $('#'+privacyname).parent().show();
        if (pathname.indexOf('abo_pr.html') === -1 && pathname.indexOf('abo_pr.html') === -1)
                $('body').css('overflow-y', 'hidden');
        $('.blur-box').addClass('blur');
        if(pathname.indexOf('index.html')>-1)
                $('[data-nagree]').hide();        
        else
                $('[data-nagree]').show();
} else {
        $('#'+privacyname).parent().hide();
        if (pathname.indexOf('abo_pr.html') === -1 && pathname.indexOf('abo_pr.html') === -1)
                $('body').css('overflow-y', 'initial');
        $('.blur-box').removeClass('blur');        
}

function setCookie(name, value, time) {
        var now = new Date();
        var offset = 8;
        var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        var nd = utc + (3600000 * offset);
        var exp = new Date(nd);
        var domain = document.domain;
        exp.setTime(exp.getTime() + 3650 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=" + domain + ";"
}

function getCookie(name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) return unescape(arr[2]);
        return null;
}
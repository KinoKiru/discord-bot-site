let locationUrl = "://143.178.215.190:3001/socket.io/socket.io.js"
jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
}

if(location.href.startsWith("https")){
    $.loadScript("https" + locationUrl)
}else{
    $.loadScript("http" + locationUrl.replace("3001", "3000"))
}

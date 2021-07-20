let locationUrl = "://143.178.215.190:3001/socket.io/socket.io.js"


if(location.href.startsWith("https")){
    document.head.innerHTML += "<script src='"+ "https" + locationUrl+"' defer>";
}else{
    document.head.innerHTML += "<script src='"+ "http" + locationUrl+"' defer>";
}

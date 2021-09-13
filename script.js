function sendMessage(){
    var num=document.getElementById("num").value;
    var msg=document.getElementById("msg").value;
    try{
        window.open("http://wa.me/"+num+"?text="+msg).focus();
    }
    catch{
        window.location.assign("http://wa.me/"+num+"?text="+msg)
    }
}

var host = "www.haider.io";
if ((host == window.location.host) && (window.location.protocol != "https:")){
    window.location.protocol = "https";
}

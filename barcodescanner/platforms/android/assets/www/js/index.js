$(function() {
    document.addEventListener('deviceready', onDeviceReady, false);
    // deviceready Event Handler
    function onDeviceReady() {
        alert("Boot successfully");
        $("#start").on("click", startscan);
    }

    function startscan() {
        alert("Scan successfully!");
    }
})

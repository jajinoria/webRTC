navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia({video: true}, function(stream) {
video.src = window.URL.createObjectURL(stream);
localStream = stream;
}, onCameraFail);

var onCameraFail = function(exception) {
    console.log('Camera did not work.', exception);
};


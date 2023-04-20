var Sound = (function () {
    var df = document.createDocumentFragment();
    return function Sound(base64Mp3: string) {
        var snd = new Audio(base64Mp3);
        df.appendChild(snd); // keep in fragment until finished playing
        snd.addEventListener('ended', function () { df.removeChild(snd); });
        snd.play();
        return snd;
    }
}());

export default Sound;
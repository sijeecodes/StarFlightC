export default function loadMusic() {
    const audio = new Audio("soundSrc/bgMusic.mp3");
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();

    function stop() {
        audio.pause();
        audio.currentTime = 0;
    }
    return stop;
}
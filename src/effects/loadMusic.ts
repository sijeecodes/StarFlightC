export default function loadMusic(): () => void {
    const audio = new Audio("soundSrc/bgMusic.mp3");
    audio.volume = 0.5;
    audio.loop = true;
    audio.addEventListener("error", (err) => console.error("Music load failed", err));
    audio.play().catch((err) => console.error("Music playback failed", err));

    function stop() {
        audio.pause();
        audio.currentTime = 0;
    }
    return stop;
}
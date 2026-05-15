const SELECT_SOUND_SRC = "soundSrc/select.mp3";
const CONFIRM_SOUND_SRC = "soundSrc/confirm.mp3";
const ADJUST_SOUND_SRC = "soundSrc/adjust.mp3";

export default function playSound(src, vol = 0.3) {
    let source = src;
    if (src == "select") source = SELECT_SOUND_SRC;
    if (src == "confirm") source = CONFIRM_SOUND_SRC;
    if (src == "adjust") source = ADJUST_SOUND_SRC;

    const audio = new Audio(source);
    audio.volume = vol;
    audio.play();
}
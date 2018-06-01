window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //if key pressed isn't connected to audio output
    audio.currentTime = 0; //allows repetitious play of audio
    audio.play();
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');

const removeTransition = e => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
keys.forEach(key => {key.addEventListener('transitionend', removeTransition)});
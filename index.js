let flipFront = document.querySelector('.front')
let flipBack = document.querySelector('.back')

function flipcard() {
    flipFront.classList.toggle('FlipFront')
    flipBack.classList.toggle('flipBack')
}
// flipBack.classList.remove('flipBack')


let StartBtn = document.querySelector('#start')
let StopBtn = document.querySelector('#stop')
let output1 = document.querySelector('#outputOfTextToSpeech');
let output2 = document.querySelector('#outputOfSpeechToText')
console.log(StartBtn, StopBtn);

let voice = new webkitSpeechRecognition();
console.log(voice);
voice.lang = 'en-US'
voice.interimResults = true;
voice.continuous = true;
console.log(voice.continuous, voice.interimResults);
        let voice = new webkitSpeechRecognition();
        console.log(voice);
        voice.lang = 'en-US'
        voice.interimResults = true;
        voice.continuous = true;
        console.log(voice.continuous, voice.interimResults);


let voiceStart = false

StartBtn.addEventListener('click', () => {
    if (!voiceStart) {
        voice.start()
        voiceStart = true;
    }
})
StopBtn.addEventListener('click', () => {
    voice.stop()
    voiceStart = false;
})
voice.onresult = event => {
    output1.value = event.results[event.results.length - 1][0].transcript
}
navigator.mediaDevices.getUserMedia({ audio: true })



let SpeakBtn = document.querySelector('#speak');

SpeakBtn.addEventListener('click', () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = output2.value;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
});
        SpeakBtn.addEventListener('click', () => {
            let msg = new SpeechSynthesisUtterance();
            msg.text = output2.value;
            msg.lang = 'en-US';
            speechSynthesis.speak(msg);
        });

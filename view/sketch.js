
logic = new Logic;
let playlists = [];
let songsClass;

let pl1=[];
let songsList=[];

let volumeSlider;
let volumeNumber;

let timeSlider;
let timeNumber;

let currentSoundIndex = 0;

const OUTPUT = "HEAD"; // VOLUME | HEAD
const WIDTH = 1280;
const HEIGH = 720;

const rectangle = {
    x: WIDTH/8,
    y: HEIGH/2 - 5,
    w: WIDTH/8 * 6,
    h: 10
}

const bola = {
    x: WIDTH/8,
    y: HEIGH/2,
    r: 15
}

function preload() {
    
    soundFormats('mp3', 'ogg');
    pl1 = [
        loadSound('./songs/Song1.mp3'),
        loadSound('./songs/Song2.mp3'),
    ];
    //playlists.push(pl1);
    console.log(playlists);
    songsClass = new Songs();
    console.log(songsClass);
}


function setup () {

    createCanvas(1280, 720);
    background(0);
    logic.loadImage();

    playlists.push(new Playlist(0,"Playlist HIJUEPUTA", songsClass))
    console.log(playlists[0])
    //sliders
    volumeSlider = createSlider(0.0, 1.0, 0.5, 0.01);
    volumeSlider.position(840, 238);
    timeSlider = createSlider(0, pl1[currentSoundIndex].duration(), 0, 1 );
    timeSlider.position(840, 285);

    //cargar desde el disco
    const inputElem = createFileInput(handleFileInput);
    inputElem.position(448, 448);
    const button = createButton('');
}

function handleFileInput (file) {
    console.log(file)
    const soundFile = new p5.SoundFile(file);
    pl1.push(soundFile)
}

function draw() {
    logic.drawImage();
    drawBar();
    volumeNumber = volumeSlider.value();
    volume(volumeNumber);
    timeSong = timeSlider.value();
    
    //5jumpSong(timeSong);
}

function mousePressed() {
    buttons();
}

function volume(volumeNumber){
    pl1[currentSoundIndex].setVolume(volumeNumber)
}

function jumpSong(timeSong){
    pl1[currentSoundIndex].jump(timeSong)
}

function mouseDragged(){
    if(dist(mouseX,mouseY, bola.x, bola.y) < bola.r){
        const bonderies = {
        x1: rectangle.x,
        x2: rectangle.x + rectangle.w,
    }
    const isInRange = mouseX > bonderies.x1 && mouseX < bonderies.x2;
        if(isInRange){
            bola.x = mouseX;
            
            if(OUTPUT === 'VOLUME') {
                const volume = map(mouseX, bonderies.x1,bonderies.x2, 0,100) / 100;
                console.log("volume: "+ volume);
                pl1[currentSoundIndex].setVolume(volume)
            } else if (OUTPUT === "HEAD") {
                const head = map(mouseX, bonderies.x1,bonderies.x2, 0,pl1[currentSoundIndex].duration());
                console.log("head: "+ head);
                pl1[currentSoundIndex].jump(head)
            }
        }
    }
}

function drawBar(){
    rectMode(CORNER);
    rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h)
    ellipseMode(CENTER)
    ellipse(bola.x, bola.y, bola.r*2)
}

function buttons(){
    console.log("Mouse X: "+ mouseX + " Mouse Y: "+ mouseY);

    //play-pause
    if (mouseX > 890 && mouseX < 940 && mouseY > 192 && mouseY < 220){
        
        if (pl1[currentSoundIndex].isPlaying()) {
            pl1[currentSoundIndex].pause();
        }else {
            pl1[currentSoundIndex].play();
        }

    } 

    //next
    if (mouseX > 950 && mouseX < 968 && mouseY > 196 && mouseY < 215) {
        console.log("next")
        jumpSong('next');
        pl1[currentSoundIndex].play();
    }

    if (mouseX > 858 && mouseX < 872 && mouseY > 192 && mouseY < 220) {
        console.log("prev")
        jumpSong('prev');
        pl1[currentSoundIndex].play();
    }

    if (mouseX > 858 && mouseX < 872 && mouseY > 192 && mouseY < 220) {
        console.log("prev")
        jumpSong('prev');
        pl1[currentSoundIndex].play();
    }

    if (mouseX > 324 && mouseX < 420 && mouseY > 136 && mouseY < 160) {
        console.log("Playlist")

    }
}

function jumpSong(mode){
    let jumper = 1;
    let verify = false;

    if(mode === "next"){
        jumper = 1;
        verify = currentSoundIndex + 1 < pl1.length
    } else if (mode === "prev"){
        jumper = -1;
        verify = currentSoundIndex - 1 > 0
    }

    if (verify) {

        pl1[currentSoundIndex].stop();
        currentSoundIndex += jumper;
    } else {
        pl1[currentSoundIndex].stop();
        currentSoundIndex = 0;
    }
}
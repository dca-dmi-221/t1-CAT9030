
logic = new Logic;
let playlists = [];
let songsClass;

let pl1=[];
let songsList=[];
let playlistPosition;

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

    this.fontLight = loadFont("assets/Mulish-Light.ttf")
    this.fontRegular = loadFont("assets/Mulish-Regular.ttf")
    this.fontSemibold = loadFont("assets/Mulish-Semibold.ttf")
    this.fontBold = loadFont("assets/Mulish-Bold.ttf")
    
    soundFormats('mp3', 'ogg');
    pl1 = [
        loadSound('./songs/Lets Go.mp3'),
        loadSound('./songs/Song2.mp3'),
    ];
    //playlists.push(pl1);
    songsClass = new Songs();
    songsList = songsClass.getSongs()
}


function setup () {

    playlists.push(new Playlist(0,"All Songs", songsList))
    playlists.push(new Playlist(1,"Playlist 1", [songsList[0], songsList[1], songsList[2]]))
    playlists.push(new Playlist(2,"Playlist 2", [songsList[3], songsList[4], songsList[5], songsList[6]]))

    playlistPosition=0;

    console.log(playlists)

    createCanvas(1280, 720);
    background(0);
    logic.loadImage();

    volumeSlider = createSlider(0.0, 1.0, 0.5, 0.01);
    volumeSlider.position(840, 238);
    timeSlider = createSlider(0, playlists[playlistPosition].canciones[currentSoundIndex].file.duration(), 0, 1 );
    timeSlider.position(840, 285);

    //cargar desde el disco
    const inputElem = createFileInput(handleFileInput);
    inputElem.position(448, 448);
    const button = createButton('');
}

//funcion pa cargar
function handleFileInput (file) {
    console.log(file)
    const soundFile = new p5.SoundFile(file);
    pl1.push(soundFile)
}

function draw() {
    logic.drawImage();
    //drawBar();
    volumeNumber = volumeSlider.value();
    volume(volumeNumber);
    timeSong = timeSlider.value();
    textFont(this.fontSemibold)
    drawPl();
    drawSongsByPlaylist(playlistPosition);
}

function drawPl(){

    const posX=120;
    const posY=170;

    for (let index = 0; index < playlists.length; index++) {

        playlists[index].drawPlaylist(posX, posY+(index*30))
    }
}

function drawSongsByPlaylist(position){

    for (let index = 0; index < playlists[position].canciones.length; index++) {
        
        fill(255)
        textSize(12);
        text(playlists[position].canciones[index].name, 325, 250+(index*30))
        text(playlists[position].canciones[index].artist, 452, 250+(index*30))
        text(playlists[position].canciones[index].album, 578, 250+(index*30))
        rect(325, 250+(index*30),20,20)
    }
}

function chooseSong() {

    const posX=325;
    const posY=250;
    let songId;

    for (let index = 0; index < playlists[playlistPosition].canciones.length; index++) {

        console.log(playlists[playlistPosition].canciones[index].songZone());
    }
}

function choosePlaylist() {
    
    const posX=120;
    const posY=170;
    let pos;

    for (let index = 0; index < playlists.length; index++) {

        pos = playlists[index].playlistZone(posX, posY+(index*30));

        if(pos!==undefined){
            console.log(pos)
            playlistPosition=pos;
        }

    }
}

function mousePressed() {
    buttons();
    choosePlaylist()
    chooseSong();
}

function volume(volumeNumber){
    playlists[playlistPosition].canciones[currentSoundIndex].file.setVolume(volumeNumber)
}

function jumpSong(timeSong){
    playlists[playlistPosition].canciones[currentSoundIndex].file.jump(timeSong)
}

/*
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
*/


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
        
        playButton();
    } 

    //next
    if (mouseX > 950 && mouseX < 968 && mouseY > 196 && mouseY < 215) {
        console.log("next")
        jumpSong('next');
        playlists[playlistPosition].canciones[currentSoundIndex].file.play();
    }

    if (mouseX > 858 && mouseX < 872 && mouseY > 192 && mouseY < 220) {
        console.log("prev")
        jumpSong('prev');
        playlists[playlistPosition].canciones[currentSoundIndex].file.play();
    }

    if (mouseX > 858 && mouseX < 872 && mouseY > 192 && mouseY < 220) {
        console.log("prev")
        jumpSong('prev');
        playlists[playlistPosition].canciones[currentSoundIndex].file.play();
    }

    if (mouseX > 324 && mouseX < 420 && mouseY > 136 && mouseY < 160) {
        console.log("Playlist")

    }
}

function playButton(){

    if (playlists[playlistPosition].canciones[currentSoundIndex].file.isPlaying()) {
        playlists[playlistPosition].canciones[currentSoundIndex].file.pause();
    }else {
        playlists[playlistPosition].canciones[currentSoundIndex].file.play();
    }
}

function jumpSong(mode){
    let jumper = 1;
    let verify = false;

    if(mode === "next"){
        jumper = 1;
        verify = currentSoundIndex + 1 < playlists[playlistPosition].canciones.length
    } else if (mode === "prev"){
        jumper = -1;
        verify = currentSoundIndex - 1 > 0
    }

    if (verify) {

        playlists[playlistPosition].canciones[currentSoundIndex].file.stop();
        currentSoundIndex += jumper;
    } else {
        playlists[playlistPosition].canciones[currentSoundIndex].file.stop();
        currentSoundIndex = 0;
    }
}
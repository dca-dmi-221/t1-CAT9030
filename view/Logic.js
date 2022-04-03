const container = document.getElementById('maincontainer');
class Logic{
    constructor(){
        this.hongitos;
        this.hojitas;
        this.kipito;
        this.backgroundImg;
        this.songs = [];
        
    }
    render = () =>{
        let downContainer = document.createElement('div');
        let button= document.createElement('button'); 
        downContainer.id = 'maincontainer';
        button.id= 'butoncito';
        var input = document.createElement("input");
            input.setAttribute('type', 'text');
           
            
        var newlabel = document.createElement("Label");
            newlabel.setAttribute("for",id_from_input);
            newlabel.innerHTML = Text;

            downContainer.appendChild(newlabel);
            downContainer.appendChild(input);
            
            
    }


    preload(){
        
    }

    loadImage(){
        
        this.backgroundImg = loadImage('./images/kipoback.png')
        this.kipito = loadImage('./images/kipohi.png')
        this.hojitas=loadImage('./images/hojitas.png')
        this.hongitos=loadImage('./images/hongitos.png')
    }

    drawImage(){
        
        image(this.backgroundImg, 0, 0, 1280, 720);
        image(this.kipito,840,190,440,700);
        image(this.hojitas,-200,61,440,700);
        image(this.hongitos,890,1,440,700);
    }

    buttons(){
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

    jumpSong(mode){
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
}
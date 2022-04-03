class Playlist {

    constructor(id,nombre, canciones){
        this.id = id;
        this.nombre = nombre;
        this.canciones=canciones;

        this.fontLight = loadFont("assets/Mulish-Light.ttf")
        this.fontRegular = loadFont("assets/Mulish-Regular.ttf")
        this.fontSemibold = loadFont("assets/Mulish-Semibold.ttf")
        this.fontBold = loadFont("assets/Mulish-Bold.ttf")
    }

    agregar = (nombreSong,artistaSong,albumSong) => {


        if((nombreSong != "" && nombreSong != null ) && 
        (artistaSong != "" && artistaSong != null) && 
        (albumSong != "" && albumSong != null ) ){

            let obj = {
                id: 0,
                nombre:nombreSong,
                artista:artistaSong,
                album: albumSong
            }

            this.canciones.push(obj)
        }
    

    };

    drawPlaylist(posX, posY){
        
        fill(255)
        textSize(16);
        textFont(this.fontSemibold)
        text(this.nombre, posX, posY)
        
    }


}

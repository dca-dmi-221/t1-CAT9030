class Playlist {

    constructor(id,nombre, canciones){
        this.id = id;
        this.nombre = nombre;
        this.canciones = canciones

    }

    /*
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
    

    };*/

    drawPlaylist(posX, posY){
        
        fill(255)
        textSize(16);
        text(this.nombre, posX, posY)
    }

    playlistZone(posX, posY){

        if (mouseX > posX && mouseX < posX+74 && mouseY > posY - 15 && mouseY < posY) {
            return this.id;   
        }       
    }

    songZone(posX, posY){

        if (mouseX > posX && mouseX < posX+317 && mouseY > posY - 15 && mouseY < posY) {
            console.log(this.canciones);
            return this.canciones;   
        }
    }

}

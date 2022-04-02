class Songs {
    constructor(){
        this.songs = [
            {
                id: 0,
                name:"Let's Go",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Song1.mp3')
            },
        
            {
                id: 1,
                name:"Nosé2",
                artist: "Sumamá2",
                album: "Nosé Vol.2",
                file: loadSound('./songs/Song2.mp3')
            }
    ] 
    }
    
    get getSongs(){
        return this.songs.id;
    }

    set setSongs(data){
        this.songs.id= data;
    }
}
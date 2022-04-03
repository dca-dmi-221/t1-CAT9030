class Songs {
    constructor(){
        this.songs = [
            {
                id: 0,
                name:"Let's Go",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Lets Go.mp3')
            },
        
            {
                id: 1,
                name:"Nosé2",
                artist: "Sumamá2",
                album: "Nosé Vol.2",
                file: loadSound('./songs/Song2.mp3')
            },

            {
                id: 2,
                name:"Fight The War",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Fight The War.mp3')
            },

            {
                id: 3,
                name:"Purple Jaguar Eye",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Purple Jaguar Eye.mp3')
            },

            {
                id: 4,
                name:"Heroes On Fire",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Heroes On Fire.mp3')
            },

            {
                id: 5,
                name:"Don't Stop Now",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Dont Stop Now.mp3')
            },

            {
                id: 6,
                name:"Crumbs",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Crumbs.mp3')
            },
    ] 
    }
    
    getSongs(){
        return this.songs.id;
    }

    set setSongs(data){
        this.songs.id= data;
    }
}
class Songs {
    constructor(){
        this.songs = [
            {
                id: 0,
                name:"Let's Go",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Lets Go.mp3'),
                img: loadImage('./images/image_3headband.png')
            },
        
            {
                id: 1,
                name:"Know My Name",
                artist: "Sumamá2",
                album: "Nosé Vol.2",
                file: loadSound('./songs/Song2.mp3'),
                img: loadImage('./images/image_2now_you_know_my_name.png')
            },

            {
                id: 2,
                name:"Fight The War",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Fight The War.mp3'),
                img: loadImage('./images/image_4.png')
            },

            {
                id: 3,
                name:"Purple Jaguar Eye",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Purple Jaguar Eye.mp3'),
                img: loadImage('./images/image_5.png')
            },

            {
                id: 4,
                name:"Heroes On Fire",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Heroes On Fire.mp3'),
                img: loadImage('./images/image_6.png')
            },

            {
                id: 5,
                name:"Don't Stop Now",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Dont Stop Now.mp3'),
                img: loadImage('./images/image_4.png')
            },

            {
                id: 6,
                name:"Crumbs",
                artist: "Sumamá",
                album: "Nosé Vol.1",
                file: loadSound('./songs/Crumbs.mp3'),
                img: loadImage('./images/image_1crumbs.png')
            },
    ] 
    }
    
    getSongs(){
        
        return this.songs;
    }
}
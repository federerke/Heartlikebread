console.log("Welcome To Pony Tribe");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [  
    {songName: "搖擺歌1", filePath: "songs/豐年祭/搖擺歌/搖擺歌1.wav", coverPath: "covers/1.jpg"},
    {songName: "搖擺歌2", filePath: "songs/豐年祭/搖擺歌/搖擺歌2.wav", coverPath: "covers/1.jpg"},
    {songName: "搖擺歌3", filePath: "songs/豐年祭/搖擺歌/搖擺歌3.wav", coverPath: "covers/1.jpg"},
    {songName: "搖擺歌4", filePath: "songs/豐年祭/搖擺歌/搖擺歌4.wav", coverPath: "covers/1.jpg"},
    {songName: "搖擺歌5", filePath: "songs/豐年祭/搖擺歌/搖擺歌5.wav", coverPath: "covers/1.jpg"},
    {songName: "搖擺歌6", filePath: "songs/豐年祭/搖擺歌/搖擺歌6.wav", coverPath: "covers/1.jpg"},
    {songName: "搖擺歌7", filePath: "songs/豐年祭/搖擺歌/搖擺歌7.wav", coverPath: "covers/1.jpg"},
    {songName: "搖擺歌8", filePath: "songs/豐年祭/搖擺歌/搖擺歌8.wav", coverPath: "covers/1.jpg"},
    {songName: "搖擺歌9", filePath: "songs/豐年祭/搖擺歌/搖擺歌9.wav", coverPath: "covers/1.jpg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/豐年祭/搖擺歌/搖擺歌${songIndex+1}.wav`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/豐年祭/搖擺歌/搖擺歌${songIndex+1}.wav`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/豐年祭/搖擺歌/搖擺歌${songIndex+1}.wav`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
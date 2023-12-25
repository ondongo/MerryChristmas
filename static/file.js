var i = 0;
var txt = 'Les rues de la ville\nSont animées\nDécorées avec style festif\nDans l\'air\nOn ressent\nLa magie de Noël...\n\n\nJoyeux Noël et Bonnes fêtes\nDe la part de GLOIRE ONDONGO!';

var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();


// flake object 
class SnowFlake {
    constructor() {
        // flake coordinates
        this.x = Math.random() * w 
        this.y = Math.random()
        // flake dimensions 
        this.size = Math.random() * 7
        this.velocity = (Math.random() - .3)
    }

    createSnow(){
        // flake attributes 
        let rgn = Math.floor(Math.random() * 300) 
        if (rgn !== 1) style.fillStyle = '#fff' 
        if (rgn === 1) style.fillStyle = '#000'
        this.y += this.velocity + (Math.random() - .1)
        this.x += (Math.random() - .5)
        
        // flake illustration 
        style.beginPath()
        style.arc(this.x, this.y, this.size, 0, 360)
        style.fill()
        style.closePath() 
    }  
};
 
// flake animation 
function fall() { 
    style.clearRect(0, 0, w, h)
    for (let i = 0; i < Math.floor(Math.random() * 2); i++) snowFlakes.push(new SnowFlake())
    snowFlakes.forEach(flake => flake.createSnow()) 
    requestAnimationFrame(fall)
};

// canvas settings
const landscape = document.getElementById('weather')
    w = landscape.width = window.innerWidth
    h = landscape.height = window.innerHeight

const style = landscape.getContext('2d')

function reCanvas() { 
    w = landscape.width = window.innerWidth
    h = landscape.height = window.innerHeight
}

// let it snow 
const snowFlakes = []
fall();
window.onresize = reCanvas 

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('ID').play();
    document.removeEventListener('click', musicPlay);
}


var pause = document.querySelector(".pause");
var audio = document.querySelector(".audio");

function togglePlay() {
	if (audio.paused) {
		audio.play();
		pause.innerHTML = "🔇";
	} else {
		audio.pause();
		pause.innerHTML = "🎵";
		pause.style.color = " #848484";
	}
}

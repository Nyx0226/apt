
// Play music on button click
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playButton");

playBtn.addEventListener("click", ()=>{
    music.play().catch(()=>{console.log("Music blocked");});
    playBtn.style.display = "none"; // hide button after click
});

// ⚡ Black thunder SVG
const boltSVG = `
<svg viewBox="0 0 60 100" fill="black">
<polygon points="30,0 10,55 30,55 20,100 50,40 30,40"/>
</svg>`;

// Heart formula
function heartXY(t){
    let x = 16*Math.pow(Math.sin(t),3);
    let y = 13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t);
    return [x,y];
}

const boltsCount = 60;
const bolts = [];
for(let i=0;i<boltsCount;i++){
    const t = (i/boltsCount)*2*Math.PI;
    const [hx,hy] = heartXY(t);

    const bolt=document.createElement("div");
    bolt.className="bolt";
    bolt.innerHTML = boltSVG;
    bolt.style.left = `calc(50vw + ${hx*15}px)`;
    bolt.style.top  = `calc(50vh - ${hy*15}px)`;
    bolt.style.transform = `scale(${0.5+Math.random()*0.5})`;
    bolt.style.animationDuration = (2+Math.random()*2)+"s";

    document.body.appendChild(bolt);
    bolts.push({el:bolt, x:hx, y:hy});
}

// Heart pulse animation
let t=0;
const pulseSpeed = 0.05;
function animateHeart(){
    t += pulseSpeed;
    const scale = 1 + 0.15 * Math.sin(t);
    bolts.forEach(b=>{
        const s = 15*scale;
        b.el.style.left = `calc(50vw + ${b.x*s}px)`;
        b.el.style.top  = `calc(50vh - ${b.y*s}px)`;
    });
    requestAnimationFrame(animateHeart);
}
animateHeart();

// Confetti emojis
const confettiEmojis = ['🎈','✨','🎊','💖'];
for(let i=0;i<40;i++){
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.innerText = confettiEmojis[Math.floor(Math.random()*confettiEmojis.length)];
    confetti.style.left = Math.random()*100+"vw";
    confetti.style.animationDuration = (4+Math.random()*6)+"s";
    confetti.style.fontSize = (14+Math.random()*20)+"px";
    document.body.appendChild(confetti);
}

// Place modular decorations
const decors = document.querySelectorAll('.decor');
decors.forEach(d=>{
    const x = d.getAttribute('data-x') || 50;
    const y = d.getAttribute('data-y') || 50;
    const scale = d.getAttribute('data-scale') || 1;
    const rotate = d.getAttribute('data-rotate') || 0;
    const anim = d.getAttribute('data-animation') || '';

    d.style.left = x + "vw";
    d.style.top = y + "vh";
    d.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

    if(anim){
        d.style.animation = `${anim} ${2 + Math.random()*2}s ease-in-out infinite`;
    }
});

// Select the images
const clickableItems = [
    {el: document.querySelector('.cake'), msg: 'Make a wish for your divalicious day! -*'},
    {el: document.getElementById('bottomRight'), msg: 'Sealing my love for you 030'},
    {el: document.getElementById('topLeft'), msg: 'Music is always better when you vibe with me :)'},
    {el: document.querySelector('.decor img[src*="balloon.png"]'), msg: 'Let your troubles fly away;>'},
    {el: document.querySelector('.decor img[src*="discoball.png"]'), msg:'Dance like you own that stage! >.<'},
    {el: document.querySelector('.face'), msg:'Love you cutie <3'}
    
];

const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closeBtn = document.getElementById('closePopup');

// Add click events
clickableItems.forEach(item=>{
    if(item.el){ // make sure element exists
        item.el.style.cursor = 'pointer';
        item.el.addEventListener('click', ()=>{
            popupMessage.textContent = item.msg; // set custom message
            popup.style.visibility = 'visible';
            popup.style.opacity = 1;
        });
 }
});


// Close popup on thunder click
closeBtn.addEventListener('click', ()=>{
    popup.style.opacity = 0;
    setTimeout(()=>popup.style.visibility = 'hidden', 300);
});

// Extend your existing play button click event
playBtn.addEventListener("click", ()=>{
    music.play().catch(()=>{console.log("Music blocked");});
    playBtn.style.display = "none"; // hide button after click

    const gameStart = document.getElementById("gameStart");

    
    setTimeout(()=>{
        gameStart.style.visibility = "visible";
        gameStart.style.opacity = 1;

        
        setTimeout(()=>{
            gameStart.style.opacity = 0;
            setTimeout(()=>gameStart.style.visibility = "hidden", 500); 
        }, 6000); 
    },); 
});

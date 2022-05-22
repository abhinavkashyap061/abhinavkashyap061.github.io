
const btn = document.querySelector("#dumb-easter-egg");
const text = document.querySelector("#easter-egg-text");
let img = document.querySelector("#easter-egg-img");

//easter egg audio
let truthSed = new Audio("assets/easter-egg.mp3");


let count = 0;
btn.addEventListener("click", function(){
    count++;
    if(count==10 || count ==30){
        
        //audio playing
        truthSed.play();
        
        //pepe dancing
        img.style.display = "inline-block";
        setInterval(function(){
            img.style.display = "none";
        },
        10000);
    }else{
        text.innerHTML = "<p>click 10 times to know the truth of my life 🥺</p>" + "you clicked me " + count + " times!";
    }
})

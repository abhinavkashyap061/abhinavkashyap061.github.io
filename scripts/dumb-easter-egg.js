
const btn = document.querySelector("#dumb-easter-egg");
const text = document.querySelector("#easter-egg-text");
let img = document.querySelector("#easter-egg-img");

//easter egg audio
let truthSed = new Audio("assets/easter-egg.mp3");


let count = 0;
btn.addEventListener("click", function(){

    count++;

    if(count>5){
        location.reload();
    }

    if(count==5){
        
        // remove everything
        // i only want pepe in frame
        text.innerHTML = "";

        //audio playing
        truthSed.play();
        
        //pepe dancing
        img.style.display = "inline-block";

        // after 9 seconds, remove pepe
        setInterval( function(){
            img.style.display = "none";
        },
        9000);

    }else{
        text.innerHTML = "<p>click 5 times to know the truth of my life 🥺</p>" + "you clicked me " + count + " times!";
    }
})


const btn = document.querySelector("#dumb-easter-egg");
const text = document.querySelector("#easter-egg-text");
let img = document.querySelector("#easter-egg-img");

let count = 0;
btn.addEventListener("click", function(){
    count++;
    if(count==10 || count ==30){
        img.style.display = "inline-block";
        setInterval(function(){
            img.style.display = "none";
        },
        10000);
    }else if(count%5==0){
        text.innerHTML = "you clicked me " + count + " times!";
        alert("chill !!!");
    }else{
        text.innerHTML = "you clicked me " + count + " times!";
    }
})

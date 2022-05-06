
const btn = document.querySelector("#dumb-easter-egg");
const text = document.querySelector("#easter-egg-text");

let count = 0;
btn.addEventListener("click", function(){
    count++;
    if(count%5==0){
        alert("chill !!!");
    }else{
        text.innerHTML = "you clicked me "+count+" times!";
    }
})

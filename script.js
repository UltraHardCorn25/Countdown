var flipCard = document.querySelector('.flip-clock');
var previousTimeBetweenDates;
var submit = document.querySelector('.submit');
var date = document.querySelector('.date').value;
date = date.split("-");
date.forEach(element => {
    console.log(element);
});
var countToDate = new Date(date[0],date[1]-1,date[2]);
console.log(countToDate);

//submit button change date
submit.addEventListener('click',()=>{
    date = document.querySelector('.date').value;
    dates = date.split('-');
    if((new Date(date[0],date[1],date[2].substring(0,2)) - new Date())>0)
        countToDate = new Date(date[0],date[1],date[2].substring(0,2));
    
})

//checking if the that is valid or not
if((countToDate - new Date())<0) {
    flipAllCards(0);
    if(document.querySelector('.dontShow')){}
    else{   
        document.querySelector('.messagge_output_box').style.display = "flex";
        document.querySelector('.overlay').style.display = "flex";
    }
} else{
    setInterval(() => {
        var currentDate = new Date();
        var timeBetweenDates = Math.ceil((countToDate - currentDate)/1000);
    
        if(previousTimeBetweenDates !== timeBetweenDates){
            flipAllCards(timeBetweenDates)
        }
        previousTimeBetweenDates = timeBetweenDates;
    },250);
}
//giving intervals for cards
function flipAllCards(time) {
    CardFlip(document.querySelector('.days'),Math.floor((time / 86400)));
    CardFlip(document.querySelector('.hours'),Math.floor((time / 3600) % 24));
    CardFlip(document.querySelector('.minutes'),Math.floor((time / 60) % 60));
    CardFlip(document.querySelector('.seconds'),time % 60);
}
//fliping car animation
function CardFlip(flipCard,newNumber){
    var topHalf = flipCard.querySelector('.top');
    var startNum=parseInt(topHalf.textContent);
    

    var bottomHalf = flipCard.querySelector('.bottom');
    var flipTop = document.createElement("div");
    var flipBottom = document.createElement("div");
    flipTop.classList.add("flip-top");
    flipBottom.classList.add("flip-bottom");
    
    if(startNum > 99  && startNum < 999)
    {
        topHalf.style.fontSize="75px";
        topHalf.style.lineHeight="1.6";

        bottomHalf.style.fontSize="75px";
        bottomHalf.style.lineHeight="1.6";

        flipTop.style.fontSize="75px";
        flipTop.style.lineHeight="1.6";

        flipBottom.style.fontSize="75px";
        flipBottom.style.lineHeight="1.6";     
    } else if(startNum > 999)
    {
        topHalf.style.fontSize="50px";
        topHalf.style.lineHeight="2.4";

        bottomHalf.style.fontSize="50px";
        bottomHalf.style.lineHeight="2.4";

        flipTop.style.fontSize="50px";
        flipTop.style.lineHeight="2.4";

        flipBottom.style.fontSize="50px";
        flipBottom.style.lineHeight="2.4";     
    }
    if(newNumber=== startNum) return
    topHalf.textContent = startNum;
    bottomHalf.textContent = startNum;
    flipTop.textContent = startNum;
    flipBottom.textContent = newNumber

    flipCard.dataset.currentNumber = startNum;
    flipCard.dataset.nextNum = newNumber


    flipTop.addEventListener('animationstart',e=>{
        topHalf.textContent = newNumber
    });

    flipTop.addEventListener('animationend',e=>{
        flipTop.remove();
    });
    flipBottom.addEventListener('animationend',e=>{
        bottomHalf.textContent = newNumber;
        flipBottom.remove();
    });

    flipCard.append(flipTop,flipBottom)
}

//theme change
var theme_container = document.querySelector('.scheme-change-container');
var theme_button = document.querySelector('.circle');
var clicked = 0;
theme_container.addEventListener('click',()=>{
    if(clicked==0){
        document.querySelector('#stylesheet').href="css/light.css";
        theme_button.style.left="28px";
        clicked=1;
    } else{
        document.querySelector('#stylesheet').href="css/dark.css";
        theme_button.style.left="2px";
        clicked=0;
    }
});


document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.messagge_output_box').style.display = "none";
    document.querySelector('.overlay').style.display = "none";
})
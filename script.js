var flipCard = document.querySelector('.flip-clock');
var previousTimeBetweenDates;
var submit = document.querySelector('.submit');
var date = document.querySelector('.date').value;
date = date.split("-");
var countToDate = new Date(date[0],date[1]-1,date[2]);

submit.addEventListener('click',()=>{
    date = document.querySelector('.date').value;
    dates = date.split('-');
    countToDate = new Date(date[0],date[1],date[2].substring(0,2));
    
})

if((countToDate - new Date())<0) {
    flipAllCards(0)
} else{
    setInterval(() => {
        var currentDate = new Date();
        console.log((countToDate - currentDate)/86400000)
        var timeBetweenDates = Math.ceil((countToDate - currentDate)/1000);
    
        if(previousTimeBetweenDates !== timeBetweenDates){
            flipAllCards(timeBetweenDates)
        }
        previousTimeBetweenDates = timeBetweenDates;
    },250);
}


function flipAllCards(time) {
    CardFlip(document.querySelector('.days'),Math.floor((time / 86400)))
    CardFlip(document.querySelector('.hours'),Math.floor((time / 3600) % 24))
    CardFlip(document.querySelector('.minutes'),Math.floor((time / 60) % 60))
    CardFlip(document.querySelector('.seconds'),time % 60)
}

function CardFlip(flipCard,newNumber){
    var topHalf = flipCard.querySelector('.top');
    var startNum=parseInt(topHalf.textContent);
    

    var bottomHalf = flipCard.querySelector('.bottom');
    var flipTop = document.createElement("div");
    var flipBottom = document.createElement("div");
    flipTop.classList.add("flip-top");
    flipBottom.classList.add("flip-bottom");
    
    if(startNum > 99)
    {
        console.log('aaaa');
        topHalf.style.fontSize="75px";
        topHalf.style.lineHeight="1.6";

        bottomHalf.style.fontSize="75px";
        bottomHalf.style.lineHeight="1.6";

        flipTop.style.fontSize="75px";
        flipTop.style.lineHeight="1.6";

        flipBottom.style.fontSize="75px";
        flipBottom.style.lineHeight="1.6";     
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
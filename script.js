
var flipCard = document.querySelector('.flip-clock');

const countToDate = new Date("2022-11-11");
var previousTimeBetweenDates;
console.log(countToDate- (new Date()));

if((countToDate- (new Date()))<0) {
    flipAllCards(0)
}else{
    setInterval(() => {
        var currentDate = new Date();
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
    if(newNumber=== startNum) return

    var bottomHalf = flipCard.querySelector('.bottom');
    var flipTop = document.createElement("div");
    var flipBottom = document.createElement("div");
    flipTop.classList.add("flip-top");
    flipBottom.classList.add("flip-bottom");

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
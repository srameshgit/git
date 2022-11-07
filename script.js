let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var renderNumberCard = (numberdArray) => {
    let numberedCard = (!numberdArray || numberdArray === '') ? numbers : numberdArray;
    let list = document.getElementById("cardList");
    list.innerHTML = '';
    numberedCard.forEach((item)=>{
        let div = document.createElement("div");
        div.innerText = item;
        div.setAttribute('class', ' card card'+item);
        list.appendChild(div);
    })
}

var shuffleCard = () => {
    const cardArray = [...numbers];
    const shuffledCard = cardArray.sort(function () {
        return Math.random() - 0.5;
    });
    console.log('djd', shuffledCard);
    renderNumberCard(shuffledCard);
}

document.addEventListener("DOMContentLoaded", function() {
    renderNumberCard(numbers)
});
document.getElementById('shuffleCard').addEventListener("click", function() {
    shuffleCard()
});
document.getElementById('sortCard').addEventListener("click", function() {
    renderNumberCard(numbers)
});

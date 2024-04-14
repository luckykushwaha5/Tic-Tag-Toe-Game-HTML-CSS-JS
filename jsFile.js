let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let winBox = document.querySelector(".winBox");
let loseBox = document.querySelector(".loseBox");
let winCount = document.querySelectorAll(".winCount");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",(eve) => {
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

let flag = '';
let player1Count = 0;
let player2Count = 0;

const showWinner = (positon1) =>{
    if(positon1 === 'O'){
        flag = positon1;
        player1Count++;
        winCount[0].innerText = `Win - ${player1Count}`;
        console.log("Player 1 Winner");
        winBox.classList.add("winClass");
        loseBox.classList.add("loseClass");
    }
    else{
        player2Count++;
        winCount[1].innerText = `Win - ${player2Count}`;
        console.log("Player 2 Winner");
        winBox.classList.add("loseClass");
        loseBox.classList.add("winClass");
    }
}

const disableButton = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableButton = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

resetButton.addEventListener("click",(eve) =>{
    turnO = true;
    enableButton();
    if(flag === 'O'){
        winBox.classList.remove("winClass");
        loseBox.classList.remove("loseClass");
        flag = '';
    }
    else{
        winBox.classList.remove("loseClass");
        loseBox.classList.remove("winClass");
        flag = '';
    }
}) 

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let positon1 = boxes[pattern[0]].innerText;
        let positon2 = boxes[pattern[1]].innerText;
        let positon3 = boxes[pattern[2]].innerText;

        if(positon1 !="" && positon2 !="" && positon3 !=""){
            if(positon1 === positon2 && positon2 === positon3){
                showWinner(positon1);
                disableButton();
            }
        }
    }
}
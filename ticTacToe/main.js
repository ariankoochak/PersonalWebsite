let Blocks = document.querySelectorAll("div");
let text = document.querySelector("h2");
let MoveFlag = 0;
let Winner = 0;
let CFlag = 0;
function CheckToWin(){
    let Box = [];
    let FullFlag = 1;
    for(let i = 0;i < 9;i++){
        Box[i] = Blocks[i].textContent;
        if(!Blocks[i].textContent)
            FullFlag = 0;
    }
    for(let i = 0;i < 9;i += 3){
        if(Box[i] == Box[i+1] && Box[i+1] == Box[i + 2] && Box[i+1] != ""){
            Winner = Box[i];
        }
    }
    for (let j = 0; j < 3; j++) {
        if (Box[j] == Box[j + 3] && Box[j + 3] == Box[j + 6] && Box[j+3] != "") {
            Winner = Box[j];
        }
    }
    if(((Box[0] == Box[4] && Box[4] == Box[8]) || (Box[2] == Box[4] && Box[4] == Box[6])) && Box[4] != ""){
        Winner = Box[4];
    }
    if(Winner != 0){
        setTimeout(function() {
            switch(Winner){
                case "X":
                    text.textContent = "Bot Win :(";
                    text.classList.add("red");
                    break;
                case "O":
                    text.textContent = "You Win !!!!";
                    text.classList.add("open");
                    break;
            }
        },0);
    }
    else if(FullFlag == 1){
        text.textContent = "Draw!";
        text.classList.add("draw");
    }
}


function GeneratorFunc(Box,check,make){
    for (let i = 0; i < 7; i += 3) {
        if (MoveFlag == 0) {
            if (Box[i] == Box[i + 1] && Box[i + 1] == check && !Blocks[i + 2].textContent) {
                MoveFlag = 1;
                Blocks[i + 2].textContent = make;
            }
            else if (Box[i] == Box[i + 2] && Box[i + 2] == check && !Blocks[i + 1].textContent) {
                MoveFlag = 1;
                Blocks[i + 1].textContent = make;
            }
            else if (Box[i + 1] == Box[i + 2] && Box[i + 2] == check && !Blocks[i].textContent) {
                MoveFlag = 1;
                Blocks[i].textContent = make;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if (MoveFlag == 0) {
            if (Box[i] == Box[i + 3] && Box[i + 3] == check && !Blocks[i + 6].textContent) {
                MoveFlag = 1;
                Blocks[i + 6].textContent = make;
            }
            else if (Box[i] == Box[i + 6] && Box[i + 6] == check && !Blocks[i + 3].textContent) {
                MoveFlag = 1;
                Blocks[i + 3].textContent = make;
            }
            else if (Box[i + 3] == Box[i + 6] && Box[i + 6] == check && !Blocks[i].textContent) {
                MoveFlag = 1;
                Blocks[i].textContent = make;
            }
        }
    }
    if (MoveFlag == 0) {
        if (Box[0] == Box[4] && Box[4] == check && !Blocks[8].textContent) {
            MoveFlag = 1;
            Blocks[8].textContent = make;
        }
        else if (Box[0] == Box[8] && Box[8] == check && !Blocks[4].textContent) {
            MoveFlag = 1;
            Blocks[4].textContent = make;
        }
        else if (Box[4] == Box[8] && Box[8] == check && !Blocks[0].textContent) {
            MoveFlag = 1;
            Blocks[0].textContent = make;
        }

        else if (Box[2] == Box[4] && Box[4] == check && !Blocks[6].textContent) {
            MoveFlag = 1;
            Blocks[6].textContent = make;
        }
        else if (Box[2] == Box[6] && Box[6] == check && !Blocks[4].textContent) {
            MoveFlag = 1;
            Blocks[4].textContent = make;
        }
        else if (Box[4] == Box[6] && Box[6] == check && !Blocks[2].textContent) {
            MoveFlag = 1;
            Blocks[2].textContent = make;
        }
    }
}

function PreventAndWinFunc(){
    if(Winner == 0){
        let Box = [];
        for (let i = 0; i < 9; i++) {
            Box[i] = Blocks[i].textContent;
        }
        GeneratorFunc(Box, "X", "X");
        GeneratorFunc(Box,"O","X");
        if(MoveFlag == 0){
            let Blank = [];
            let j = 0;
            for (let i = 0; i < 9; i++) {
                if(!Blocks[i].textContent){
                    Blank[j] = Blocks[i];
                    j++;
                }
            }
            Blank[Math.floor(Math.random() * Blank.length)].textContent = "X";
            MoveFlag = 1;
        }
        MoveFlag = 0;
        document.querySelector("h2").innerHTML = "Player Turn";
        CheckToWin();
    }
}

function SubmitClick(){
    if(!this.textContent && Winner == 0 && CFlag == 0){
        CFlag = 1;
        this.textContent = "O";
        document.querySelector("h2").innerHTML = "Bot Turn";
        CheckToWin();
        setTimeout(PreventAndWinFunc, 1000);
        setTimeout(function(){
            CFlag = 0;
        }, 1000);
    }
}

function Newgame(){
    MoveFlag = 0;
    Winner = 0;
    text.classList.remove("open","red","draw");
    for(let Block of Blocks){
        Block.textContent = "";
    }
    let Dice = Math.random();
    if(Dice >= 0.5){
        document.querySelector("h2").innerHTML = "Player Turn";
    }
    else{
        document.querySelector("h2").innerHTML = "Bot Turn";
        setTimeout(PreventAndWinFunc, 1000);
    }
}
Newgame();
for(let Block of Blocks){
    Block.onclick = SubmitClick;
}
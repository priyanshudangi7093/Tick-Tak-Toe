let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset");
let message = document.querySelector(".message");
let newGame= document.querySelector("#newgame");
let mesg = document.querySelector("#mesg");
 let turno = true; //playerx,playero
 let count = 0;
 //we use 2d array
 const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 const reset=()=>{
    turno = true;
    count = 0;
    enableBoxes();
    message.classList.add("hide");
};
boxes.forEach ((box) => {
    box.addEventListener("click",() => {
        if(turno){
            box.innerText= "O";
            turno=false;
        }
        else{
            box.innerText ="X"
            turno=true;
        }
        box.disabled  = true;
        count++;
        let isWinner = checkWinner();
        if (count == 9 && !isWinner){
            gameDraw();
        }

    });
});

const gameDraw =()=>{
    mesg.innerText =` Game was a Draw.`;
    message.classList.remove("hide");
    disableBoxes();
};

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

 const showwinner=(winner)=>{
mesg.innerText =`congratulation ,winner is ${winner}`;
message.classList.remove("hide");
disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winpattern) {
        
           let pos1Val= boxes[pattern[0]].innerText;
           let pos2Val= boxes[pattern[1]].innerText;
           let pos3Val= boxes[pattern[2]].innerText;

           if(pos1Val!="" &&  pos2Val!="" && pos3Val!=""){
           if(pos1Val==pos2Val && pos2Val==pos3Val){
           showwinner(pos1Val);
            return true;
           }
           }
        }
};
newGame.addEventListener("click",reset);
resetGame.addEventListener("click",reset);

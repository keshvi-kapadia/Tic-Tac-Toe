let turnO = true;
let cnt = 0;
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector(".new");
let msg = document.querySelector(".msg");
let p1,p2;
let winner = "";
function InputPlayer()
{
  p1="",p2="";
  p1 = prompt("Enter Player 1 name :");
  p2 = prompt("Enter Player 2 name :");
  if (p1 == null || p1=="") p1 = 'O';
  if (p2 == null || p2=="") p2 = 'X';
}
InputPlayer()
newbtn.classList.add("hide");

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    cnt++;
    checkWinner();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  InputPlayer();
  newbtn.classList.add("hide");
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    cnt = 0;
    msg.innerText = "";
  });
  turnO = true;
};

reset.addEventListener("click", enableBoxes);
newbtn.addEventListener("click", enableBoxes);
const checkWinner = () => {
 if(cnt<=9) {
    for (patterns of winPatterns) 
      {
      val1 = boxes[patterns[0]].innerText;
      val2 = boxes[patterns[1]].innerText;
      val3 = boxes[patterns[2]].innerText;
      if (val1 != "" && val2 != "" && val3 != "") 
        {

        if (val1 == val2 && val2 == val3) 
          {
          if (val1 == "O") winner = p1;
          else winner = p2;

          msg.innerText = `Congratulations!! player ${winner} won`;
          newbtn.classList.remove("hide");
          disableBoxes();
          break;
        }
        if(cnt==9)
        {
          msg.innerText = "Game is Draw";
          newbtn.classList.remove("hide");
        }
      }
    }
  }
};

let myscore = 0;
let comscore = 0;

let choice = document.querySelectorAll(".choice");

const massage = document.getElementById("msg");

const ComscorePara = document.getElementById("Com-score");
const UserscorePara = document.getElementById("User-score");

/* computer choice generate */

const genComChoice = () => {
  let options = ["rock", "paper", "Scissors"];

  let randIdx = Math.floor(Math.random() * 3);

  return options[randIdx];
};

/* show-win  */
const showWiner = (userwin) => {
  if (userwin) {
    myscore++;
    UserscorePara.innerText = myscore;
    console.log("User win");
    massage.innerText = "User win";
  } else {
    comscore++;
    ComscorePara.innerText = comscore;
    console.log("User lose");
    massage.innerText = "User lost";
  }
};
/* const daraw geme funtion-str */

const drawgame = () => {
  console.log("the is draw now");
  massage.innerText = "Game is draw";
};
/* const daraw geme funtion-end */
const playgame = (Userchoice) => {
  console.log("User choice", Userchoice);
  /* computer choice */
  const comChoice = genComChoice();
  console.log("Computer choice", comChoice);

  if (Userchoice == comChoice) {
    drawgame();
  } else {
    let userWin = true;

    if (Userchoice == "rock") {
      userWin = comChoice == "paper" ? false : true;
    } else if (Userchoice == "paper") {
      userWin = comChoice == "Scissors" ? false : true;
    } else {
      userWin = comChoice == "rock" ? false : true;
    }
    showWiner(userWin);
  }
};

choice.forEach((element) => {
  element.addEventListener("click", () => {
    const Userchoice = element.getAttribute("id");

    playgame(Userchoice);
  });
});

/* play game */

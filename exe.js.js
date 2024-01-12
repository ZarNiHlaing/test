let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let div = document.getElementById("game-div");
let chance = 10;
let guessed_num = [];
let answer = Math.floor(Math.random() * 50) + 1;
console.log(answer);

msg2.textContent = "Number of chance to guess :" + chance ;

function play() {
  let guess_num = Number(document.getElementById("guess_num").value);


  //number check betweem 1 -50
  if (guess_num < 1 || guess_num > 50) {
    alert("please enter the number between  1to 50");
  } else {
    // answer high / low /equal start
    if (guess_num > answer) {
        div.classList.add("wrong")
      msg1.textContent = "Your number is too height";
      chance--;
      msg2.textContent = "Number of chance to guess :" + chance ;
      guessed_num.push(guess_num);
      msg3.textContent =   "Guess number are ;" + guessed_num;
      document.getElementById("guess_num").value = "";
    } else if (guess_num === answer) {
        div.classList.add("true")
        document.querySelector(".btn-guess").disabled = true;
      msg1.textContent = "Congratulation you win this game ";
    } else {
        div.classList.add("wrong")
        msg1.textContent = "Your number is too low";
        chance--;
      msg2.textContent = "Number of chance to guess :" + chance ;
      guessed_num.push(guess_num);
      msg3.textContent =   "Guess number are ;" + guessed_num;
      document.getElementById("guess_num").value = "";//game & number restart
    }
    //// answer high / low /equal end


    //chance check start
    if(chance <= 0){
        document.querySelector(".btn-guess").disabled = true;
        alert("Your chance is empty . Please restart  the game");
        restart();
    }
    //chance check end
  }
}

function restart() {
    answer = Math.floor(Math.random() * 50) + 1;//correct answer restart
    document.querySelector(".btn-guess").disabled = false;
    console.log(answer);
    document.getElementById("guess_num").value = ""; //input box clear
    div.classList.remove("wrong");//border color clear
    div.classList.remove("true");// border color clear
    msg1.textContent = "Your game successfully restart fully ||";//msg1 clear and replace
    chance = 10;// chance restart
    msg2.textContent = "Number of chance to guess :" + chance ;//msg2 clear and replace
    chance = 10;// chance restart
    guessed_num = [];// array restart
    msg3.textContent =   "Guess number are ;" + guessed_num;//msg3 clear and replace
    chance = 10;// chance restart
}

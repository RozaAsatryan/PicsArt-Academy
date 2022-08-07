const startButton = document.querySelector(".startButton");
const nextButton = document.querySelector(".nextButton");
const gameTable = document.querySelector(".grid");
const cells = document.querySelectorAll(".grid-item");
const audio = new Audio("./wrong.mp3");

let arr;
let count = 1;
let progress = 0;

startButton.addEventListener(
  "click",
  () => {
    level();
  },
  { once: true }
);

function level() {
  document.getElementById("points").innerHTML = `Your Points: ${progress}`;

  for (let i = 0; i < cells.length; i++) {
    setTimeout(() => {
      cells[i].style.backgroundColor = "azure";
      cells[i].classList.remove("wrong");
    }, 1000);
  }
  arr = new Set();

  for (let i = 0; arr.size < count; i++) {
    let i = Math.trunc(Math.random() * 12);
    arr.add(i);
  }

  arr = [...arr];
  console.log(arr);

  async function colorsNum(i) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(i), 1000);
    });
  }

  async function bar() {
    for (let i = 0; i < arr.length; i++) {
      let u = await colorsNum(arr[i]);
      console.log(u);
      cells[u].style.backgroundColor = "rgb(181 236 252)";
      setTimeout(() => {
        cells[u].style.backgroundColor = "azure";
      }, 500);
    }
  }

  bar();
}

let getNum = [];
async function check(num) {
  getNum.push(num);
  console.log(getNum);
  for (let i = 0; i < getNum.length; i++) {
    if (getNum[i] === arr[i]) {
      cells[getNum[i]].style.backgroundColor = "green";
      setTimeout(() => {
        if (getNum.length === arr.length) {
          if (count < 7) {
            count++;
            progress++;
            getNum = [];
            level();
          }
        }
      }, 500);
    } else {
      cells[getNum[i]].classList.add("wrong");
      audio.play();
      count++;
      getNum = [];
      level();
    }
  }
}

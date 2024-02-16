let menuSelector = document.querySelector("#menu-dropdown");
let notificationSection = document.querySelector(".notification-card");
let alertSelector = document.querySelector(".icon-block");
let alertNotification = document.querySelector(".alert-card");

let displayIcon = document.querySelector(".displayIcon");
let icon1 = document.querySelector(".displayIcon1");
let icon2 = document.querySelector(".displayIcon2");

let radio = document.querySelectorAll(".radio");
let radioDotted = document.querySelectorAll(".dottedCircle");
let radioFull = document.querySelectorAll(".fullCircle");
let radioHalf = document.querySelectorAll(".halfCirle");
let radioItem = document.querySelectorAll(".radioItem");

let taskDesc = document.querySelectorAll(".task-description");
let taskBtn = document.querySelectorAll(".task-btn");
let taskImage = document.querySelectorAll(".task-img");

let taskSection = document.querySelectorAll(".task-block");
menuSelector.addEventListener("click", function () {
  notificationSection.classList.toggle("hide");
});

menuSelector.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    notificationSection.classList.toggle("hide");
  }
});

alertSelector.addEventListener("click", function () {
  console.log(alertNotification);
  alertNotification.classList.toggle("hide");
});

alertSelector.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    alertNotification.classList.toggle("hide");
  }
});

document.querySelector(".displayIcon").addEventListener("click", function () {
  if (icon1.classList.contains("hide")) {
    icon1.classList.remove("hide");
    icon2.classList.add("hide");
    document.querySelector(".tasks-container").classList.add("hide");
  } else {
    icon1.classList.add("hide");
    document.querySelector(".tasks-container").classList.remove("hide");
    icon2.classList.remove("hide");
  }
});

//for Keyboard users when enter is pressed
document
  .querySelector(".displayIcon")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (icon1.classList.contains("hide")) {
        icon1.classList.remove("hide");
        icon2.classList.add("hide");
        document.querySelector(".tasks-container").classList.add("hide");
      } else {
        icon1.classList.add("hide");
        document.querySelector(".tasks-container").classList.remove("hide");
        icon2.classList.remove("hide");
      }
    }
  });

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".message").style.display = "none";
});

document.querySelector("#close").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".message").style.display = "none";
  }
});
let total = 0;
function TickSelected() {
  for (let i in radio) {
    let position = i;
    radio[i].addEventListener("click", function () {
      taskSection[i].classList.add("darkBackground");
      // console.log(showModal[i].innerText);
      if (!radioDotted[i].classList.contains("hide")) {
        radioDotted[i].classList.add("hide");
        radioHalf[i].classList.remove("hide");

        setTimeout(() => {
          radioHalf[i].classList.add("hide");
          radioHalf[i].classList.add("rotate");
          radioFull[i].classList.remove("hide");
          for (let i in radio) {
            if (position == i) {
              taskBtn[i].classList.remove("hide");
              taskDesc[i].classList.remove("hide");
              taskImage[i].classList.remove("hide");
              total++;
              console.log(total);
              taskProgressCounter.innerHTML = total;
              progress.style.width = total * 25;
            } else {
              taskSection[i].classList.remove("darkBackground");
              taskBtn[i].classList.add("hide");
              taskDesc[i].classList.add("hide");
              taskImage[i].classList.add("hide");
            }
          }
        }, 200);
      } else if (!radioFull[i].classList.contains("hide")) {
        total--;
        console.log(total);
        taskSection[i].classList.remove("darkBackground");
        taskProgressCounter.innerHTML = total;
        progress.style.width = total * 25;
        radioHalf[i].classList.add("hide");
        radioFull[i].classList.add("hide");
        radioDotted[i].classList.remove("hide");
      }
    });
  }
}

// for (let i in radio) {
//   radio[i].addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       alert("");
//       taskSection[i].classList.add("darkBackground");
//       // console.log(showModal[i].innerText);
//       if (!radioDotted[i].classList.contains("hide")) {
//         radioDotted[i].classList.add("hide");
//         radioHalf[i].classList.remove("hide");

//         setTimeout(() => {
//           radioHalf[i].classList.add("hide");
//           radioHalf[i].classList.add("rotate");
//           radioFull[i].classList.remove("hide");
//           for (let i in radio) {
//             if (position == i) {
//               taskBtn[i].classList.remove("hide");
//               taskDesc[i].classList.remove("hide");
//               taskImage[i].classList.remove("hide");
//               total++;
//               console.log(total);
//               taskProgressCounter.innerHTML = total;
//               progress.style.width = total * 25;
//             } else {
//               taskSection[i].classList.remove("darkBackground");
//               taskBtn[i].classList.add("hide");
//               taskDesc[i].classList.add("hide");
//               taskImage[i].classList.add("hide");
//             }
//           }
//         }, 200);
//       } else if (!radioFull[i].classList.contains("hide")) {
//         total--;
//         console.log(total);
//         taskSection[i].classList.remove("darkBackground");
//         taskProgressCounter.innerHTML = total;
//         progress.style.width = total * 25;
//         radioHalf[i].classList.add("hide");
//         radioFull[i].classList.add("hide");
//         radioDotted[i].classList.remove("hide");
//       }
//     }
//   });
// }

TickSelected();

function PressTicketSeleted(y) {
  for (let i in radio) {
    if (y == i) {
      if (!radioDotted[i].classList.contains("hide")) {
        taskSection[i].classList.add("darkBackground");
        radioDotted[i].classList.add("hide");
        radioHalf[i].classList.remove("hide");
        setTimeout(() => {
          radioHalf[i].classList.add("hide");
          radioHalf[i].classList.add("rotate");
          radioFull[i].classList.remove("hide");
          for (let i in radio) {
            if (y == i) {
              taskBtn[i].classList.remove("hide");
              taskDesc[i].classList.remove("hide");
              taskImage[i].classList.remove("hide");
              total++;
              console.log(total);
              taskProgressCounter.innerHTML = total;
              progress.style.width = total * 25;
            } else {
              taskSection[i].classList.remove("darkBackground");
              taskBtn[i].classList.add("hide");
              taskDesc[i].classList.add("hide");
              taskImage[i].classList.add("hide");
            }
          }
        }, 200);
      } else if (!radioFull[i].classList.contains("hide")) {
        total--;
        console.log(total);
        taskSection[i].classList.remove("darkBackground");
        taskProgressCounter.innerHTML = total;
        progress.style.width = total * 25;
        radioHalf[i].classList.add("hide");
        radioFull[i].classList.add("hide");
        radioDotted[i].classList.remove("hide");
      }
    }
  }
}

function showDescription(y) {
  console.log(radioItem[y]);
  if (taskDesc[y].classList.contains("hide")) {
    for (let i in radioItem) {
      if (y == i) {
        taskSection[i].classList.add("darkBackground");
        taskBtn[i].classList.remove("hide");
        taskDesc[i].classList.remove("hide");
        taskImage[i].classList.remove("hide");
      } else if (y != i) {
        taskSection[i].classList.remove("darkBackground");
        taskBtn[i].classList.add("hide");
        taskDesc[i].classList.add("hide");
        taskImage[i].classList.add("hide");
      }
    }
    // }
    // });
  } else if (![y].classList.contains("hide")) {
    taskSection[i].classList.remove("darkBackground");
    taskBtn[i].classList.remove("hide");
    taskDesc[i].classList.remove("hide");
    taskImage[i].classList.remove("hide");
  }
}

// function enterDescription(y, event) {
//   if (event.key === "Enter") {
//     showDescription(y);
//   }
// }

console.log("first");

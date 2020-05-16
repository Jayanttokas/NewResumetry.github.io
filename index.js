hoverStyle = (i) => {
  document.querySelector("#project-box" + i ).classList.add("hover");

  switch (i) {
    case 1:
      document.querySelector(".xyz").src = "car.png";
      break;

    case 2:
    document.querySelector(".xyz").src = "robo.PNG";
      break;

    case 3:
    document.querySelector(".xyz").src = "budget.PNG";
      break;
    default:

    case 4:
    document.querySelector(".xyz").src = "piggame.PNG";
      break;

    case 5:
    document.querySelector(".xyz").src = "coffee.PNG";
    break;

    case 6:
    document.querySelector(".xyz").src = "ytsearch.PNG";
    break;

    case 7:
    document.querySelector(".xyz").src = "resume.PNG";
    break;

    case 8:
    document.querySelector(".xyz").src = "picsapp.PNG";
    break;

  }

};

removeStyle = (i) => {
  document.querySelector("#project-box" + i).classList.remove("hover");
  document.querySelector(".xyz").src = "third.png";

}

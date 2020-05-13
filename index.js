hoverStyle = (i) => {
  document.querySelector("#project-box" + i ).classList.add("hover");

  switch (i) {
    case 1:
      document.querySelector(".xyz").src = "car.png";
      break;

    case 2:
    document.querySelector(".xyz").src = "robo.png";
      break;

    case 3:
    document.querySelector(".xyz").src = "budget.png";
      break;
    default:

    case 4:
    document.querySelector(".xyz").src = "piggame.png";
      break;

    case 5:
    document.querySelector(".xyz").src = "coffee.png";
    break;

    case 6:
    document.querySelector(".xyz").src = "ytsearch.png";
    break;

    case 7:
    document.querySelector(".xyz").src = "resume.png";
    break;

    case 8:
    document.querySelector(".xyz").src = "picsapp.png";
    break;

  }

};

removeStyle = (i) => {
  document.querySelector("#project-box" + i).classList.remove("hover");
  document.querySelector(".xyz").src = "third.png";

}

hoverStyle = (i) => {
  document.querySelector("#project-box" + i ).classList.add("hover");

  switch (i) {
    case 1:
      document.querySelector(".xyz").src = "img/car.png";
      break;

    case 2:
    document.querySelector(".xyz").src = "img/robo.png";
      break;

    case 3:
    document.querySelector(".xyz").src = "img/budget.png";
      break;
    default:

    case 4:
    document.querySelector(".xyz").src = "img/piggame.png";
      break;

    case 5:
    document.querySelector(".xyz").src = "img/coffee.png";
    break;

    case 6:
    document.querySelector(".xyz").src = "img/ytsearch.png";
    break;

    case 7:
    document.querySelector(".xyz").src = "img/resume.png";
    break;

    case 8:
    document.querySelector(".xyz").src = "img/picsapp.png";
    break;

  }

};

removeStyle = (i) => {
  document.querySelector("#project-box" + i).classList.remove("hover");
  document.querySelector(".xyz").src = "img/third.png";

}

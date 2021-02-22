const scoreCard = () => {
  const initialInput = () => {
    const scorecardtable = document.querySelector(".scorecardtable");
    scorecardtable.style.display = "none";
    const container = document.querySelector(".container");
    const namesInputContainer = document.createElement("div");
    namesInputContainer.className = "namesinputcontainer";
    const heading = document.createElement("h1");
    heading.innerText = "Enter the fighter names below";
    container.appendChild(namesInputContainer);
    namesInputContainer.appendChild(heading);
    const inputContainerForNames = document.createElement("div");
    namesInputContainer.appendChild(inputContainerForNames);
    const inputFirstFighter = document.createElement("input");
    const inputSecondFighter = document.createElement("input");
    inputFirstFighter.id = "firstFighter";
    inputFirstFighter.type = "text";
    inputSecondFighter.id = "secondFighter";
    inputSecondFighter.type = "text";
    inputContainerForNames.appendChild(inputFirstFighter);
    inputContainerForNames.appendChild(inputSecondFighter);
    const submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    namesInputContainer.appendChild(submitButton);
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      scoreCardTable(inputFirstFighter, inputSecondFighter);
    });
  };
  const scoreCardTable = (inputFirstFighter, inputSecondFighter) => {
    console.log(inputFirstFighter.value, inputSecondFighter.value);
    const scoreCardTableContainer = document.querySelector(".tablediv");
    const scoreCardTable = document.querySelector(".scorecardtable");
    const namesInputContainer = document.querySelector(".namesinputcontainer");
    namesInputContainer.style.display = "none";
    scoreCardTable.style.display = "block";

    const firstFighterHeading = document.querySelector("#fighter1");
    const secondFighterHeading = document.querySelector("#fighter2");
    if (inputFirstFighter.value !== "" || inputSecondFighter.value !== "") {
      firstFighterHeading.innerText = inputFirstFighter.value;
      secondFighterHeading.innerText = inputSecondFighter.value;
    } else {
      firstFighterHeading.innerText = "First Fighter";
      secondFighterHeading.innerText = "Second Fighter";
    }

    const addRoundButton = document.createElement("button");
    addRoundButton.innerText = "+";
    scoreCardTableContainer.appendChild(addRoundButton);
    addRoundButton.addEventListener("click", (e) => {
      e.preventDefault();
      const tableBody = document.querySelector("#scoretable");
      const newRow = document.createElement("tr");
      newRow.innerHTML =
        ' <td><input class="f1round" min="7" max="10"  placeholder="10"  type="number" /></td> <td><input min="7" max="10"  placeholder="10" class="f2round" type="number" /></td>';

      // max rounds 15
      if (document.querySelectorAll(".f1round").length > 14) {
        alert("Max Rounds Reached");
      } else {
        tableBody.appendChild(newRow);
      }
    });
  };
  initialInput();
};

scoreCard();

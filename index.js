const scoreCard = () => {
  const initialInput = () => {
    const scorecardtable = document.querySelector(".scorecardtable");
    const totalstable = document.querySelector("#totals-table");
    scorecardtable.style.display = "none";
    totalstable.style.display = "none";
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
    const totalstable = document.querySelector("#totals-table");

    const namesInputContainer = document.querySelector(".namesinputcontainer");
    namesInputContainer.style.display = "none";
    scoreCardTable.style.display = "block";

    const totalFighter1Input = document.querySelector("#total-fighter-1");
    const totalFighter2Input = document.querySelector("#total-fighter-2");

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
      const fighter1rounds = document.querySelectorAll(".f1round");
      const fighter2rounds = document.querySelectorAll(".f2round");

      e.preventDefault();
      const tableBody = document.querySelector("#scoretable");
      const newRow = document.createElement("tr");
      newRow.innerHTML =
        ' <td><input class="f1round" min="7" max="10"  placeholder="10"  type="number" /></td> <td><input min="7" max="10"  placeholder="10" class="f2round" type="number" /></td>';

      if (
        fighter1rounds[fighter1rounds.length - 1].value < 7 ||
        fighter2rounds[fighter2rounds.length - 1].value < 7
      ) {
        alert("please enter values for the previous round");
      } else {
        if (document.querySelectorAll(".f1round").length > 14) {
          alert("Max Rounds Reached");
        } else {
          totalstable.style.display = "block";
          tableBody.appendChild(newRow);
          // get totals from rounds and add them to totals
          let t1 = [];
          let t2 = [];
          for (let i = 0; i < fighter1rounds.length; i++) {
            t1.push(Number(fighter1rounds[i].value));
            t2.push(Number(fighter2rounds[i].value));
          }
          const reducer = (accumulator, currentValue) =>
            accumulator + currentValue;

          let reducedt1 = t1.reduce(reducer);
          let reducedt2 = t2.reduce(reducer);

          totalFighter1Input.value = reducedt1;
          totalFighter2Input.value = reducedt2;
        }
      }
    });
  };
  initialInput();
};

scoreCard();

const showGrade = document.getElementById("showGrade");
showGrade.addEventListener("click", (event) => {
  event.preventDefault();
  const marksInput = document.getElementById("marks");
  const gradeDisplay = document.getElementById("grade");
  const marks = marksInput.value;

  if (marks > 100 || marks < 0) {
    alert(`Marks cannot be more than 100 or less than 0.`);
    return;
  } else if (marks > 79) {
    gradeDisplay.innerHTML = `Your grade is: A`;
  } else if (marks > 60) {
    gradeDisplay.innerHTML = `Your grade is: B`;
  } else if (marks > 59) {
    gradeDisplay.innerHTML = `Your grade is: C`;
  } else if (marks > 40) {
    gradeDisplay.innerHTML = `Your grade is: D`;
  } else if (marks < 40) {
    gradeDisplay.innerHTML = `Your grade is: E`;
  } else if (marks === "") {
    alert(`Input marks.`);
    return;
  }
});

const speedBtn = document.getElementById("speedBtn");

speedBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const speedInput = document.getElementById("speed");
  const speedOutput = document.getElementById("showPoints");
  const speed = parseInt(speedInput.value);

  function getpoints(speed) {
    const kmPerPoint = 5;
    const maxPoints = 12;
    let points;

    if (speed < 70) {
      points = "Ok";
    } else {
      points = Math.floor((speed - 70) / kmPerPoint);
      if (points > 12) {
        return "License suspended";
      }
      points = "Points: " + points;
    }

    return points;
  }

  speedOutput.innerHTML = getpoints(speed);
});

const salaryBtn = document.getElementById("salaryBtn");

salaryBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const incomeInput = document.getElementById("salary");
  const output = document.getElementById("netSalary");
  const income = parseInt(incomeInput.value);

  function calculatePaye(income) {
    if (income < 24000) {
      return income * 0.1;
    } else if (income < 32333) {
      return income * 0.25;
    } else if (income > 32333) {
      return income * 0.3;
    }
  }
  console.log("PAYE: " + calculatePaye(income));

  function calculateNhif(income) {
    if (income <= 5999) {
      return 150;
    } else if (income >= 6000 && income <= 7999) {
      return 300;
    } else if (income >= 8000 && income <= 11999) {
      return 400;
    } else if (income >= 12000 && income <= 14999) {
      return 500;
    } else if (income >= 15000 && income <= 19999) {
      return 600;
    } else if (income >= 20000 && income <= 24999) {
      return 750;
    } else if (income >= 25000 && income <= 29999) {
      return 850;
    } else if (income >= 30000 && income <= 34999) {
      return 900;
    } else if (income >= 35000 && income <= 39999) {
      return 950;
    } else if (income >= 40000 && income <= 44999) {
      return 1000;
    } else if (income >= 45000 && income <= 49999) {
      return 1100;
    } else if (income >= 50000 && income <= 59999) {
      return 1200;
    } else if (income >= 60000 && income <= 69999) {
      return 1300;
    } else if (income >= 70000 && income <= 79999) {
      return 1400;
    } else if (income >= 80000 && income <= 89999) {
      return 1500;
    } else if (income >= 90000 && income <= 99999) {
      return 1600;
    } else {
      return 1700;
    }
  }
  console.log("NHIF: " + calculateNhif(income));
  const nssf = 400;

  const salary =
    income - (calculatePaye(income) + calculateNhif(income) + nssf);

  output.append(salary);
});

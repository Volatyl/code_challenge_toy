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
    }
    points = Math.floor((speed - 70) / kmPerPoint);

    if (points > 12) {
      return "License suspended";
    }
    return points;
  }

  speedOutput.innerHTML = getpoints(speed);
});

const salaryBtn = document.getElementById("salaryBtn");

salaryBtn.addEventListener("click", (event) => {
  event.preventDefault();



});

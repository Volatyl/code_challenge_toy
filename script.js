function showGrade() {
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
    }
  }
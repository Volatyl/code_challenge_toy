function showGrade() {
    const marksInput = document.getElementById("marks");
    const gradeDisplay = document.getElementById("grade");
    const marks = marksInput.value;
  
    if (marks > 100 || marks < 0) {
      alert(`Marks cannot be more than 100 or less than 0.`);
      return;
    } else if (marks > 79) {
      gradeDisplay.innerHTML = `A`;
    } else if (marks > 60) {
      gradeDisplay.innerHTML = `B`;
    } else if (marks > 59) {
      gradeDisplay.innerHTML = `C`;
    } else if (marks > 40) {
      gradeDisplay.innerHTML = `D`;
    } else if (marks < 40) {
      gradeDisplay.innerHTML = `E`;
    }
  }
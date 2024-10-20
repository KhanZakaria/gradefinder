let bangla = document.querySelector("#bangla");
let banglaGrade = document.querySelector(".banglaGrade");

let english = document.querySelector("#english");
let englishGrade = document.querySelector(".egrade");

let math = document.querySelector("#math");
let mathGrade = document.querySelector(".mgrade");

let socialScience = document.querySelector("#socialScience");
let socialScienceGrade = document.querySelector(".ssgrade");

let science = document.querySelector("#science");
let scienceGrade = document.querySelector(".sgrade");

let religion = document.querySelector("#religion");
let religionGrade = document.querySelector(".rgrade");

let submit = document.querySelector("#submit");

let totalMark = document.querySelector(".totalmark");
let gradeForm = document.querySelector(".gradeform");
let totalSub = document.querySelector(".totalSub");
let cgpa = document.querySelector(".cgpa");

let gradeFinder = function (val, showVal) {
  if (val <= 32.99) {
    showVal.innerHTML = "F";
  } else if (val <= 39.99) {
    showVal.innerHTML = "D";
  } else if (val <= 49.99) {
    showVal.innerHTML = "C";
  } else if (val <= 59.99) {
    showVal.innerHTML = "B";
  } else if (val <= 69.99) {
    showVal.innerHTML = "A-";
  } else if (val <= 79.99) {
    showVal.innerHTML = "A";
  } else if (val <= 100.0) {
    showVal.innerHTML = "A+";
  } else {
    showVal.innerHTML = "";
  }
};

let gradeCalculator = function (sub, subgrade) {
  let mark = parseInt(sub.value, 10);

  gradeFinder(mark, subgrade);

  let total =
    parseInt(bangla.value, 10) +
    parseInt(english.value, 10) +
    parseInt(math.value, 10) +
    parseInt(socialScience.value, 10) +
    parseInt(science.value, 10) +
    parseInt(religion.value, 10);

  totalMark.innerHTML = total;

  let totalSubValue = gradeForm.length - 1;
  totalSub.innerHTML = totalSubValue;

  let average = total / totalSubValue;

  if (banglaGrade.innerHTML == "F" ||
    englishGrade.innerHTML == "F" ||
    mathGrade.innerHTML == "F" ||
    socialScienceGrade.innerHTML == "F" ||
    scienceGrade.innerHTML == "F" ||
    religionGrade.innerHTML == "F") {
    cgpa.innerHTML = "Fail";
  } else {
    gradeFinder(average, cgpa);
  }
  
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !bangla.value ||
    !english.value ||
    !math.value ||
    !socialScience.value ||
    !science.value ||
    !religion.value
  ) {
    alert("values can't be empty");
  } else if (
    bangla.value > 100 ||
    english.value > 100 ||
    math.value > 100 ||
    socialScience.value > 100 ||
    science.value > 100 ||
    religion.value > 100
  ) {
    alert("Fix Invalid Mark. Mark should be between 0-100");
  } else {
    gradeCalculator(bangla, banglaGrade);
    gradeCalculator(english, englishGrade);
    gradeCalculator(math, mathGrade);
    gradeCalculator(socialScience, socialScienceGrade);
    gradeCalculator(science, scienceGrade);
    gradeCalculator(religion, religionGrade);
  }
});

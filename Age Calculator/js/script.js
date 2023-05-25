var day_input, month_input, year_input;
var day_output, month_output, year_output;

var year, month, day;

document.addEventListener("DOMContentLoaded", function () {
  day_input = document.getElementById("day-input");
  month_input = document.getElementById("month-input");
  year_input = document.getElementById("year-input");

  day_output = document.getElementById("days-output");
  month_output = document.getElementById("months-output");
  year_output = document.getElementById("years-output");

  day_input.addEventListener("blur", validateDay);
  month_input.addEventListener("blur", validateMonth);
  year_input.addEventListener("blur", validateYear);

  var submit_year = document.getElementById("submit-year");
  submit_year.addEventListener("click", calculateAge);
});

// Check if year is leap
function leapYear() {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

function validateDay() {
  var day = parseInt(day_input.value);
  if (isNaN(day) || day < 1 || day > 31) {
    day_input.classList.add("date-error-valid-text");
    day_input.classList.remove("error-field-required");
  } else {
    day_input.classList.remove("date-error-valid-text");
    day_input.classList.remove("error-field-required");
  }
}

function validateMonth() {
  var month = parseInt(month_input.value);
  var empty_month = document.getElementById("month-empty");
  var month_error = document.getElementById("month-error-valid-text");

  // Check if month is empty
  if (isNaN(month)) {
    empty_month.style.display = "block";
  } else {
    empty_month.style.display = "none";
  }

  // Check if month is greater than 12 or less than 1
  if (month < 1 || month > 12) {
    month_error.style.display = "block";
  } else {
    month_error.style.display = "none";
  }
}

function validateYear() {
  year = parseInt(year_input.value);
  month = parseInt(month_input.value);
  day = parseInt(day_input.value);

  var currentYear = new Date().getFullYear();
  var empty_year = document.getElementById("year-empty");
  var date_error = document.getElementById("year-error-valid-text");

  // Check if year is leap and make an error to monthValidate
  if (leapYear() && month == 2 && day > 29) {
    day_input.classList.add("date-error-valid-text");
  } else {
    day_input.classList.remove("date-error-valid-text");
  }

  // Check if year is empty
  if (isNaN(year)) {
    empty_year.style.display = "block";
  } else {
    empty_year.style.display = "none";
  }

  // Check if year is greater than current year
  if (year > currentYear) {
    date_error.style.display = "block";
  } else {
    date_error.style.display = "none";
  }
}

function calculateAge() {
  validateDay();
  validateMonth();
  validateYear();

  var today = new Date();
  var today_day = today.getDate();
  var today_month = today.getMonth() + 1;
  var today_year = today.getFullYear();

  var age_day = today_day - day;
  var age_month = today_month - month;
  var age_year = today_year - year;

  if (age_day < 0) {
    age_month--;
    age_day += 31;
  }

  if (age_month < 0) {
    age_year--;
    age_month += 12;
  }

  day_output.innerText = age_day;
  month_output.innerText = age_month;
  year_output.innerText = age_year;

  alert(`You are ${age_year} years, ${age_month} months, and ${age_day} days old.`);
}

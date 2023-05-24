document.addEventListener("DOMContentLoaded", function () {
  var day_input = document.getElementById("day-input");
  var month_input = document.getElementById("month-input");
  var year_input = document.getElementById("year-input");

  var day_output = document.getElementById("days-output");
  var month_output = document.getElementById("months-output");
  var year_output = document.getElementById("years-output");

  function validateDay() {
    var day = parseInt(day_input.value);
    if (isNaN(day) || day < 1 || day > 31) {
      day_input.classList.add("error-valid");
      day_input.classList.remove("error-field-required");
    } else {
      day_input.classList.remove("error-valid");
      day_input.classList.remove("error-field-required");
    }
  }

  function validateMonth() {
    var month = parseInt(month_input.value);
    if (isNaN(month) || month < 1 || month > 12) {
      month_input.classList.add("error-valid");
      month_input.classList.remove("error-field-required");
    } else {
      month_input.classList.remove("error-valid");
      month_input.classList.remove("error-field-required");
    }
  }

  function validateYear() {
    var year = parseInt(year_input.value);
    var currentYear = new Date().getFullYear();
    if (isNaN(year) || year > currentYear) {
      year_input.classList.add("error-valid");
      year_input.classList.remove("error-field-required");
    } else {
      year_input.classList.remove("error-valid");
      year_input.classList.remove("error-field-required");
    }
  }
  function calculateAge() {
    validateDay();
    validateMonth();
    validateYear();

    var day = parseInt(day_input.value);
    var month = parseInt(month_input.value);
    var year = parseInt(year_input.value);

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
    alert(
      `You are ${age_year} years, ${age_month} months, and ${age_day} days old.`
    );
  }

  day_input.addEventListener("blur", validateDay);
  month_input.addEventListener("blur", validateMonth);
  year_input.addEventListener("blur", validateYear);

  var submit_year = document.getElementById("submit-year");
  submit_year.addEventListener("click", calculateAge);
});

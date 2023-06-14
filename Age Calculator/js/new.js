document.addEventListener("DOMContentLoaded", function () {
  // input from the form inputs
  var day_input = document.getElementById("day-input");
  var month_input = document.getElementById("month-input");
  var year_input = document.getElementById("year-input");

  // get items to output data
  var day_output = document.getElementById("days-output");
  var month_output = document.getElementById("months-output");
  var year_output = document.getElementById("years-output");

  // get error for invalid inputs
  var date_error = document.getElementById("date-error-valid-text");
  var month_error = document.getElementById("month-error-valid-text");
  var year_error = document.getElementById("year-error-valid-text");

  // get error of empty
  var empty_date = document.getElementById("date-empty");
  var empty_month = document.getElementById("month-empty");
  var empty_year = document.getElementById("year-empty");

  // get submission button
  var submit_year = document.getElementById("submit-year");

  /* check if year is leap */
  // Check if year is leap
  function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }

  /* validate year */
  function validateYear() {
    var year = parseInt(year_input.value);
    var month = parseInt(month_input.value);
    var day = parseInt(day_input.value);

    var currentYear = new Date().getFullYear();
    // Check if year is leap and make an error to monthValidate
    if (leapYear(year) && month == 2 && day > 29) {
      date_error.style.display = "block";
    } else {
      date_error.style.display = "none";
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

  /* validate month */
  function validateMonth() {
    var month = parseInt(month_input.value);
    var day = parseInt(day_input.value);
    var date_error = document.getElementById("date-error-valid-text");

    // Check if month is empty
    if (isNaN(month) || month === "") {
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

    // Validate day based on the month
    if (day < 1 || day > 31) {
      // Invalid day input
      date_error.style.display = "block";
    } else if (
      (month === 4 || month === 6 || month === 9 || month === 11) &&
      day > 30
    ) {
      // 30-day month, but day exceeds 30
      date_error.style.display = "block";
    } else if (month === 2) {
      // February
      var year = year_input.value.trim(); // Get the year input value
      if (year === "") {
        // Year is not yet entered
        date_error.style.display = "none";
      } else {
        year = parseInt(year); // Parse the year as an integer
        var isLeapYear = leapYear(year);
        if ((isLeapYear && day > 29) || (!isLeapYear && day > 28)) {
          // Invalid day input for February
          date_error.style.display = "block";
        } else {
          // Valid day input for February
          date_error.style.display = "none";
        }
      }
    } else {
      // Valid day input for other months
      date_error.style.display = "none";
    }
  }

  function validateDay() {
    var day = parseInt(day_input.value);
    if (isNaN(day)) {
      empty_date.style.display = "block";
    } else {
      empty_date.style.display = "none";
    }

    if (day < 1 || day > 31) {
      date_error.style.display = "block";
    } else {
      date_error.style.display = "none";
    }
  }

  function calculateAge() {
    // validate all inputs
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

  // Add event listeners for blur on input fields
  day_input.addEventListener("blur", validateDay);
  month_input.addEventListener("blur", validateMonth);
  year_input.addEventListener("blur", validateYear);

  /* submit */
  submit_year.addEventListener("click", calculateAge);
});

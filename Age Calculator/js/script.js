document.addEventListener("DOMContentLoaded", function () {
    var day_output = document.getElementById("days-output");
    var month_output = document.getElementById("months-output");
    var year_output = document.getElementById("years-output");
  
    function calculateAge() {
      var day_input = parseInt(document.getElementById("day-input").value);
      var month_input = parseInt(document.getElementById("month-input").value);
      var year_input = parseInt(document.getElementById("year-input").value);
  
      var today = new Date();
      var today_day = today.getDate();
      var today_month = today.getMonth() + 1;
      var today_year = today.getFullYear();
  
      var age_day = today_day - day_input;
      var age_month = today_month - month_input;
      var age_year = today_year - year_input;
  
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
  
    var submit_year = document.getElementById("submit-year");
    submit_year.addEventListener("click", calculateAge);
  });
  
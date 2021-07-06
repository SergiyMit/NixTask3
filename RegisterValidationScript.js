$(document).ready(function() {
$('#registerForm').submit(function(e) {
  e.preventDefault();
  var firstname = $('#firstname').val();
  var lastname = $('#lastname').val();
  var email = $('#email').val();
  var password = $('#password').val();

  $(".invalid-feedback").remove();
  if (password.length >= 6) {
    $('#password').removeClass("is-invalid");
    $('#password').addClass("is-valid");
  }
  else
  {
    $('#password').addClass("is-invalid").after('<span class="invalid-feedback">Password is too short. Please, add 6+ characters password</span>');
  }
  if (firstname.length >= 1) {
    $('#firstname').removeClass("is-invalid");
    $('#firstname').addClass("is-valid");
  }
  else
  {
    $('#firstname').addClass("is-invalid").after('<span class="invalid-feedback">Enter a valid name</span>');
  }
  if (lastname.length >= 1) {
    $('#lastname').removeClass("is-invalid");
    $('#lastname').addClass("is-valid");
  }
  else
  {
    $('#lastname').addClass("is-invalid").after('<span class="invalid-feedback">Enter a valid Lastname</span>');
  }
  var userinput = $("#email").val();
  var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
  if (email.length >= 1 && pattern.test(userinput)) {
    $('#email').removeClass("is-invalid");
    $('#email').addClass("is-valid");
  }
  else
  {
    $('#email').addClass("is-invalid").after('<span class="invalid-feedback">Enter a valid email</span>');
  }
});
});

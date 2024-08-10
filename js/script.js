let usernameInput = document.querySelector(".username-input");
let passwordInput = document.querySelector(".password-input");
let err = document.querySelector(".err");
let massageErr = document.querySelector(".massage");
let iconCloseErr = document.querySelector(".icon-close");
let iconCheckErr = document.querySelector(".icon-check");

console.log(massageErr);
function datavalidation() {
  let usernameValue = usernameInput.value;
  let passwordValue = passwordInput.value;
  let errValue = err.value;
  let massageErrValue = massageErr.value;

  if (usernameValue.length < 12 || passwordValue < 8) {
    err.style.display = "flex";
    iconCloseErr.style.display = "flex";
    iconCheckErr.style.display = "none";
    massageErr.innerHTML = "لطفا اطلاعات را به درستی وارد نمایید";
  } else {
    err.style.display = "flex";
    iconCheckErr.style.display = "flex";
    iconCloseErr.style.display = "none";
    massageErr.innerHTML = "خوش آمدید";
  }

  setTimeout(function () {
    err.style.display = "none";
  }, 3000);

  console.log(
    "Username :" + usernameValue + "\n" + "Password :" + passwordValue
  );
}

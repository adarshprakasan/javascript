let pw = document.getElementById("passWord");

function showPw(e) {
  if (pw.type === "password") {
    pw.type = "text";
    e.target.innerText = "Hide";
  } else {
    pw.type = "password";
    e.target.innerText = "Show";
  }
}

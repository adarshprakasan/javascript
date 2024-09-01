//^ ====================REGISTRATION====================

let errMsg = document.getElementById("errMessage");

let datas = [];
let data = {};
let userData = [];

function registration(e) {
  e.preventDefault();

  //!-------------------Getting values from HTML-------------------
  let fname = document.getElementById("firstname");
  let lname = document.getElementById("lastname");
  let email = document.getElementById("email");
  let mob = document.getElementById("mobile");
  let pw = document.getElementById("password");
  let cpw = document.getElementById("cpassword");
  let errMsg = document.getElementById("errMessage");

  //!-------------------Validation statements-------------------
  let emailVal = /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
  let isEmail = emailVal.test(email.value);
  let mobVal = /^[6-9][0-9]{9}$/g;
  let isMobile = mobVal.test(mob.value);
  let passwordVal =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
  let isPassword = passwordVal.test(pw.value);

  //!-------------------Checking empty string or not-------------------
  if (
    fname.value === "" ||
    lname.value === "" ||
    email.value === "" ||
    mob.value === "" ||
    pw.value === "" ||
    cpw.value === ""
  ) {
    errMsg.innerHTML = `<p class="errMsg"> Enter all the fields </p>`;
    errMsg.style.display = "block";
  }

  //!-------------------Checking Email format-------------------
  else if (!isEmail) {
    errMsg.innerHTML = `<p class="errMsg"> Invalid Email Format </p>`;
    errMsg.style.display = "block";
  }

  //!-------------------Checking Mobile number length-------------------
  else if (mob.value.length != 10) {
    errMsg.innerHTML = `<p class="errMsg"> Mobile Number Should be 10 digits </p>`;
    errMsg.style.display = "block";
  }

  //!-------------------Checking format of Mobile-------------------
  else if (!isMobile) {
    errMsg.innerHTML = `<p class="errMsg"> Invalid Mobile Number </p>`;
    errMsg.style.display = "block";
  }

  //!-------------------Checking Password length-------------------
  else if (pw.value.length < 6) {
    errMsg.innerHTML = `<p class="errMsg"> Password should be atleast 6 characters </p>`;
    errMsg.style.display = "block";
  } else if (pw.value.length > 12) {
    errMsg.innerHTML = `<p class="errMsg"> Password shouldn't be morethan 12 characters </p>`;
    errMsg.style.display = "block";
  }

  //!-------------------Checking format of Password-------------------
  else if (!isPassword) {
    errMsg.innerHTML = `<p class="errMsg"> Invalid Password Format </p>`;
    errMsg.style.display = "block";
  }

  //!-------------------Checking both Password is same-------------------
  else if (pw.value !== cpw.value) {
    cpw.classList.toggle("inputError");
    errMsg.style.display = "block";
    errMsg.innerHTML = `<p class="errMsg"> Password Mismatch! </p>`;
  }

  //!-------------------Storing data in LocalStorage-------------------
  else {
    userData = JSON.parse(localStorage.getItem("datas")) || [];
    let valid = { email: email.value, mobile: mob.value };

    let res = userData.some((a) => {
      return a.email === valid.email || a.mobile === valid.mobile;
    });

    if (res) {
      errMsg.style.display = "block";
      errMsg.innerHTML = `<p class="errMsg"> User already Exists</p>`;
    } else {
      data = {
        fullname: fname.value + " " + lname.value,
        email: email.value,
        mobile: mob.value,
        ConfirmPassword: cpw.value,
      };

      datas.push(data);
      localStorage.setItem("datas", JSON.stringify(datas));
      errMsg.style.display = "block";
      errMsg.innerHTML = `<p class="successMsg"> Registered Successfully</p>`;
    }
  }
}

//^ ====================LOGIN====================

let lmob = document.getElementById("lmobile");
let lpw = document.getElementById("lpassword");
let mobToggle = document.getElementById("mobToggle");
let pwToggle = document.getElementById("pwToggle");
let i = 0;

//-------------------Swapping between Mobile (default) and Email-------------------

function onSwap() {
  if (lmob.type === "tel") {
    lmob.type = "email";
    lmob.placeholder = "Enter your email";
    mobToggle.innerHTML = `<i class="fa-solid fa-phone"></i>`;
  } else {
    lmob.type = "tel";
    lmob.placeholder = "Enter your mobile no.";
    mobToggle.innerHTML = `<i class="fa-solid fa-at"></i>`;
  }
}

//-------------------Password view/hide-------------------

function pwHide() {
  if (lpw.type === "password") {
    lpw.type = "text";
    pwToggle.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    lpw.type = "password";
    pwToggle.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
}

//-------------------Logging in-------------------

function login(e) {
  e.preventDefault();

  userData = JSON.parse(localStorage.getItem("datas"));

  //!-------------------Checking input fields are empty or not-------------------

  if (lmob.value == "" || lpw.value == "") {
    errMsg.style.display = "block";
    errMsg.innerHTML = `<p class="errMsg"> Enter all the fields </p>`;
  }

  //!-------------------Checking if data matches with existing user list-------------------
  else {
    let loggedInUser = userData.find((a) => {
      return (
        (a.email === lmob.value || a.mobile === lmob.value) &&
        a.ConfirmPassword === lpw.value
      );
    });
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    if (loggedInUser) {
      let otp = Math.trunc(Math.random() * 1000000);
      localStorage.setItem("OTP", otp);
      window.location.href = "./otp.html";
    } else {
      errMsg.style.display = "block";
      errMsg.innerHTML = `<p class="errMsg"> Invalid Username or Password! </p>`;
    }
  }
}

//^ ====================OTP VERIFICATION====================

let otpVer = document.getElementById("otpVer");
let otp = localStorage.getItem("OTP");

function otpLogin(e) {
  e.preventDefault();

  if (otp == otpVer.value) {
    localStorage.removeItem("OTP");
    window.location.href = "./userdetails.html";
  } else {
    errMsg.style.display = "block";
    errMsg.innerHTML = `<p class="errMsg"> Invalid OTP </p>`;
  }
}

//^ ====================DISPLAYING DETAILS====================

function displayDetails() {
  //!-------------------Displaying current user details-------------------

  let currentUser = document.getElementById("currentUser");
  loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  currentUser.innerHTML = `
  <table>
    <tr>
      <th>Name</th>
      <td>${loggedInUser.fullname}</td>
      <th>Email</th>
      <td>${loggedInUser.email}</td>
      <th>Mobile</th>
      <td>${loggedInUser.mobile}</td>
    </tr>
  </table>`;

  //!-------------------Displaying whole user list-------------------

  let detailSection = document.getElementById("detailsBody");
  userData = JSON.parse(localStorage.getItem("datas"));
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let maintr = document.createElement("tr");
  let headtr = document.createElement("tr");
  let userth = document.createElement("th");
  userth.innerText = "LIST OF USER";
  userth.colSpan = 4;
  let slth = document.createElement("th");
  slth.innerText = "Sl No.";
  let nameth = document.createElement("th");
  nameth.innerText = "Name of User";
  let emailth = document.createElement("th");
  emailth.innerText = "Email";
  let mobileth = document.createElement("th");
  mobileth.innerText = "Mobile No.";
  maintr.append(userth);
  headtr.append(slth, nameth, emailth, mobileth);
  let tbody = document.createElement("tbody");

  detailSection.prepend(table);
  table.append(thead);
  thead.append(maintr);
  thead.append(headtr);
  table.append(tbody);
  userData.map(({ fullname, email, mobile }, slno) => {
    let bodytr = document.createElement("tr");
    let sltd = document.createElement("td");
    let nametd = document.createElement("td");
    let emailtd = document.createElement("td");
    let mobiletd = document.createElement("td");
    sltd.innerText = slno + 1;
    nametd.innerText = fullname;
    emailtd.innerText = email;
    mobiletd.innerText = mobile;
    bodytr.append(sltd, nametd, emailtd, mobiletd);
    tbody.append(bodytr);
  });
}

//^ ====================CLEAR LOCALSTORAGE====================

function clrstrg() {
  localStorage.clear();
}

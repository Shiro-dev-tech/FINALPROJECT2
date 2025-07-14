function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const correctUsername = "SirJaredisAWESOME";
  const correctPassword = "PLEASEGIVEMEGOODGRADESSSSSSSSSSSS";

  if (username === correctUsername && password === correctPassword) {
  window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-msg").innerHTML =
      `<strong>Oops!</strong> Try this:<br><br>
       <span style="color:#00f5ff;">Username:</span> <code>${correctUsername}</code><br>
       <span style="color:#00f5ff;">Password:</span> <code>${correctPassword}</code>`;
  }
}

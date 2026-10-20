const username = "Admin";
const password = "12345";

function loginValidator() {
  if (username === "" || password === "") {
    return "Invalid username or password";
  } else if (password.length < 5) {
    return "Invalid username or password";
  } else if (username === "Admin" && password === "12345") {
    return "Login successful";
  } else {
    return "Invalid username or password";
  }
}

console.log(loginValidator());

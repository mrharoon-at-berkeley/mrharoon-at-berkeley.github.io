const validateEmail = (email) =>
  new Promise((resolve, reject) => {
    if (email === "") {
      reject("ERROR: Missing email. Please give an email.");
    } else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        reject("ERROR: Invalid email. Please give a VALID email.");
      } else {
        resolve();
      }
    }
  });
const validateName = (name) =>
  new Promise((resolve, reject) => {
    if (name === "") {
      reject("ERROR: Missing name. Please give a name.");
    } else {
      resolve();
    }
  });

const validateMessage = (message) =>
  new Promise((resolve, reject) => {
    if (message === "") {
      reject("ERROR: Missing message. Please write a message.");
    } else {
      resolve();
    }
  });

const submit = () => {
  const userName = document.getElementById("name");
  const userEmail = document.getElementById("email");
  const userMessage = document.getElementById("content");
  const sendButton = document.getElementById("sendButton");
  const intro = document.getElementById("intro");
  const pleaseName = document.getElementById("pleaseName");
  const pleaseEmail = document.getElementById("pleaseEmail");
  const pleaseMessage = document.getElementById("pleaseMessage");

  sendButton.addEventListener("click", async (result) => {
    result.preventDefault(); // Prevent form submission

    try {
      await Promise.all([
        validateName(userName.value),
        validateEmail(userEmail.value),
        validateMessage(userMessage.value),
      ]);
      alert("Message sent!");
      location.reload();
    } catch (e) {
      console.log(e);
      alert(e);
      intro.innerText = "If you'd like, just email mrharoon@berkeley.edu to contact me!";
      if (e.includes("name")) {
        pleaseName.removeAttribute("hidden");
      } else {
        pleaseName.setAttribute("hidden", true);
      }
      if (e.includes("email")) {
        pleaseEmail.removeAttribute("hidden");
      } else {
        pleaseEmail.setAttribute("hidden", true);
      }
      if (e.includes("message")) {
        pleaseMessage.removeAttribute("hidden");
      } else {
        pleaseMessage.setAttribute("hidden", true);
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    submit();
  } catch (e) {
    console.error(e);
  }
});

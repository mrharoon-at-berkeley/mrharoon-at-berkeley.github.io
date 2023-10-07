const submit = () => {
  const userName = document.getElementById("name");
  const userEmail = document.getElementById("email");
  const userContent = document.getElementById("content");
  const sendButton = document.getElementById("sendButton");
  const intro = document.getElementById("intro");
  const pleaseName = document.getElementById("pleaseName");
  const pleaseEmail = document.getElementById("pleaseEmail");
  const pleaseMessage = document.getElementById("pleaseMessage");

  sendButton.addEventListener("click", (result) => {
    result.preventDefault(); // Prevent form submission
    alertMessage = "";
    if (userName.value === "") {
      alertMessage += "ERROR: Missing name. Please give a name.\n";
      pleaseName.removeAttribute("hidden");
    } else {
      pleaseName.setAttribute("hidden");
    }
    if (userEmail.value === "") {
      alertMessage += "ERROR: Missing email. Please give an email.\n";
      pleaseEmail.removeAttribute("hidden");
    } else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(userEmail.value)) {
        alertMessage += "ERROR: Invalid email. Please give a VALID email.\n";
        pleaseName.removeAttribute("hidden");
      } else {
        pleaseName.setAttribute("hidden");
      }
    }
    if (userContent.value === "") {
      alertMessage +=
        'ERROR: Missing message. Please write something under "What\'s up?"\n';
      pleaseMessage.removeAttribute("hidden");
    } else {
      pleaseMessage.setAttribute("hidden");
    }
    if (alertMessage !== "") {
      alert(alertMessage);
      intro.innerText =
        "If you'd like, just email mrharoon@berkeley.edu to contact me!";
    } else {
      alert("Message Sent!");
      location.reload();
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

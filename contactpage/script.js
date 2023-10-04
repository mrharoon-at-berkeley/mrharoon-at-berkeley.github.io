const submit = () => {
    // get info from name, email, and content item tags
    // attempt to send via email
    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userContent = document.getElementById("content");
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", (result) => {
        result.preventDefault(); // Prevent form submission
            alertMessage = "";
            if (userName.value === "") {
                alertMessage+= "ERROR: Missing name. Please give a name.\n";
            }
            if (userEmail.value ==="") {
                alertMessage+= "ERROR: Missing email. Please give an email.\n";
            } else {
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailRegex.test(userEmail.value)) {
                    alertMessage+= "ERROR: Invalid email. Please give a VALID email.\n";
                }
            }
            if (userContent.value==="") {
                alertMessage+= "ERROR: Missing message. Please write something under \"What's up?\"\n";
            }

            if (alertMessage !=="") {
                alert(alertMessage);
            } else {
                alert("Message Sent!")
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
const modal = document.getElementById("cookieModal");

window.onload = function() {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show after 3 seconds only if user hasn't decided before
      setTimeout(() => {
        modal.style.display = 'flex';
      }, 3500);
    }
  };
  
function accecptCookie(name, value, days){
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    localStorage.setItem("cookieConsent", "accepted");
    modal.style.display = "none";
}

function declineCookie(){
    modal.style.display = "none";
    localStorage.setItem("cookieConsent", "declined");
    modal.style.display = 'none';
}

function formValidation(event){
    const name = document.getElementById("firstName").value;
    const surname = document.getElementById("secondName").value;
    const email = document.getElementById("email").value;
    const textBox = document.getElementById("textBox").value;

    const nameText = document.getElementById("nameText");
    const surnameText = document.getElementById("surnameText");
    const emailText = document.getElementById("emailText");
    const messageText = document.getElementById("messageText");

    const nameDiv = document.getElementById("firstNameDiv");
    const surnameDiv = document.getElementById("secondNameDiv");
    const emailDiv = document.getElementById("emailDiv");
    const messageDiv = document.getElementById("messageTextDiv");

    let isValid = true;

    if(name.trim() === ""){
        nameText.textContent = "This field is required";
        nameText.style.color = "red";
        nameText.style.marginTop = "-17px";
        nameText.style.fontSize = "12px"

        nameText.style.marginLeft = "43px";
        nameDiv.appendChild(nameText);
        isValid = false;
    
    }else{
        nameText.textContent = ""; //Clear error message
    }

    if(surname.trim() === ""){
        surnameText.textContent = "This field is required";
        surnameText.style.color = "red";
        surnameText.style.marginTop = "-17px";
        surnameText.style.fontSize = "12px";

        surnameText.style.marginLeft = "43px";
        surnameDiv.appendChild(surnameText);
        isValid = false;
    
    }else{
        surnameText.textContent = ""; //Clear error message
    }

    if(email.trim() === ""){
        emailText.textContent = "This field is required";
        emailText.style.color = "red";
        emailText.style.marginTop = "-17px";
        emailText.style.fontSize = "12px";

        emailText.style.marginLeft = "43px";
        emailDiv.appendChild(emailText);
        isValid = false;
    
    }else{
        emailText.textContent = ""; //Clear error message
    }

    if(textBox.trim() === ""){
        messageText.textContent = "This field is required";
        messageText.style.color = "red";
        messageText.style.marginTop = "-17px";
        messageText.style.fontSize = "12px";

        messageText.style.marginLeft = "43px";
        messageDiv.appendChild(messageText);
        isValid = false;
    
    }else{
        messageText.textContent = ""; //Clear error message
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if invalid
    }
    return isValid;
}
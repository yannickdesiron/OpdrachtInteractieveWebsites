( function () {
    let forms = document.getElementById('theForm');
    let errors = ["Errors:</br>"];

    forms.addEventListener('submit', validateForm)

    function validateForm() {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let userName = document.getElementById("userName").value;
        let adres = document.getElementById("adres").value;
        let country = document.getElementById("inputCountry").value;
        let state = document.getElementById("inputState").value;
        let email = document.getElementById("email").value;
        let passwordOne = document.getElementById("passwordOne").value;
        let passwordTwo = document.getElementById("passwordTwo").value;

        
        checkEmptyField(firstName,"</br>Voornaam moet ingevuld zijn");
        checkEmptyField(lastName,"</br>Achternaam moet ingevuld zijn");
        checkEmptyField(userName,"</br>Gebruikersnaam moet ingevuld zijn");
        checkEmptyField(adres,"</br>Adres moet ingevuld zijn");
        checkEmptyField(country,"</br>Land moet ingevuld zijn");
        checkEmptyField(state,"</br>Provincie moet ingevuld zijn");

        if (!validateEmail(email)) {
            errors.push("Email moet ingevuld zijn");
        }

        if (passwordOne === "") {
            errors.push("</br>Wachtwoord moet ingevuld zijn");
        }
        if (passwordTwo === "") {
            errors.push("</br>Wachtwoord moet ingevuld zijn");
        }
        if (passwordOne !== passwordTwo) {
            errors.push("</brDe wachtwoorden zijn niet gelijk");
        }



        let errorAlert = document.getElementById("errorAlert");
        for (let i = 0; i < errors.length; i++) {
            errorAlert.innerHTML += errors[i];
        }
        

    }

    function checkEmptyField(field, alert) {
        if (field === "") {
            errors.push(alert);
        }
    }

    function validateEmail(email) {
        if (email === "")
            return false;
        else  {
            return true;
        }  
       
        
    }






})()


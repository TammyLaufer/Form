const name = document.getElementById("name");

const address = document.getElementById("address");

const submitBtn = document.getElementById("submit");




// this function valdiate Name field if "Enter" key was pressed 
function validateName(event) {
    if (event.which === 13 || event.keyCode === 13) {
        nameValidation();
    };
}

// this function valdiate Address field if "Enter" key was pressed 

function validateAddress(event) {
    if (event.which === 13 || event.keyCode === 13) {
        addressValidation();
    };
}


function validateNameAndAddress() {
    if (nameValidation()) {
        if (addressValidation())
            return true;

    } else return false;

}



function nameValidation() {
    const input = name.value;
    if (input.length >= 5) {
        return true;
    } else {
        alert("Name should be more than 5 characters long");
        return false;
    }
}



function addressValidation() {
    const input = address.value;
    if (input.length < 10) {
        return true;
    } else {
        alert("Address should be less than 10 characters long");
        return false;
    };
};






name.addEventListener("keydown", validateName);

address.addEventListener("keydown", validateAddress);

submitBtn.addEventListener("click", validateNameAndAddress);
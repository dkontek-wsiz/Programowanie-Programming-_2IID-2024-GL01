function showError(element, message) {
    element.textContent = message;

}

function clearError(element) {
    element.textContent = '';
}


function checkMinLength(element, elementError, minLength = 3) {
    if(element.value.length >= minLength)
    {
        clearError(elementError);
        return true;
    }
   
    showError(elementError, `Minimalna długość to ${minLength}`);
    return false;
}


function checkEmail(emailInput, emailError) {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        showError(emailError, 'Adres e-mail jest wymagany.');
        return false;
    } else if (!emailRegex.test(emailValue)) {
        showError(emailError, 'Wprowadź poprawny adres e-mail.');
        return false;
    } 
    
    clearError(emailError);
    return true;
}

function checkPassword(passwordValue, passwordError) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!strongPasswordRegex.test(passwordValue)) {
        showError(passwordError, 'Hasło musi mieć min. 8 znaków, zawierać dużą literę, małą literę i cyfrę.');
        return false;
    } 
    clearError(passwordError);
    return true;
}
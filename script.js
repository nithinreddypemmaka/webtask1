function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    
    if (dobInput) {
        var dob = new Date(dobInput);
        var today = new Date();
        
        var age = today.getFullYear() - dob.getFullYear();
        
        // Check if birthday has occurred this year
        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
            age--;
        }
        
        document.getElementById('result').innerText = "Your age is: " + age + " years.";
    } else {
        document.getElementById('result').innerText = "Please enter a valid date of birth.";
    }
}

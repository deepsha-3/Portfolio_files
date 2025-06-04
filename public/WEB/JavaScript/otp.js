let inputs = document.querySelectorAll(".input input");
let otpDisplay = document.getElementById("otpDisplay");
let message = document.getElementById("message");

// Generate OTP and display it
let generatedOTP;
function generateOTP() {
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    otpDisplay.innerHTML = "Generated OTP: " + generatedOTP; // Show OTP
    console.log("Generated OTP:", generatedOTP); // For debugging
}

// Auto-focus shifting logic
inputs.forEach((input, index) => {
    input.addEventListener("keyup", (e) => {
        if (e.key >= 0 && e.key <= 9 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});

// OTP Verification
function verifyOTP() {
    let enteredOTP = Array.from(inputs).map(input => input.value).join("");

    if (enteredOTP === generatedOTP) {
        message.innerHTML = "✅ OTP Verified Successfully!";
    } else {
        message.innerHTML = "❌ Incorrect OTP. Generating a new OTP...";
        generateOTP(); // Generate a new OTP on failure
    }
}

// Generate OTP on page load
generateOTP();


let currentStep = 1;

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((stepElement) => {
        stepElement.classList.remove('active');
    });
    document.getElementById(`step-${step}`).classList.add('active');
}

function nextStep() {
    if (currentStep < 3) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
});

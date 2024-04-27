document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById("openModalBtn");
    const appointmentModal = document.getElementById("appointmentModal");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const feedbackModal = document.getElementById("feedbackModal");
    const feedbackForm = document.getElementById("feedbackForm");

    function validateForm() {
        const firstName = document.getElementById("firstName").value;
        // Add validation logic here
        // For example, check if firstName is not empty
        return firstName !== "";
    }

    if (openModalBtn) {
        openModalBtn.addEventListener("click", function() {
            appointmentModal.style.display = "block";
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", function() {
            appointmentModal.style.display = "none";
        });
    }

    window.addEventListener("click", function(event) {
        if (event.target == appointmentModal) {
            appointmentModal.style.display = "none";
        }
    });

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            if (validateForm()) {
                console.log("Form submitted successfully!");
                feedbackForm.reset();
                // Close the modal
                $(feedbackModal).modal('hide');
            } else {
                console.log("Form validation failed. Please check your input.");
                // Display an error message
                const errorMessage = document.getElementById("errorMessage");
                if (errorMessage) {
                    errorMessage.textContent = "Please check your input.";
                }
            }
        });
    }

    const carousel = document.getElementById("homeCarousel");

    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 2000,
            pause: "hover",
            wrap: true
        });

        const carouselButton = document.getElementById("carouselButton");
        const carouselPlay = document.getElementById("carouselPlay");

        carouselButton.addEventListener("click", function() {
            carouselInstance.pause();
        });

        carouselPlay.addEventListener("click", function() {
            carouselInstance.cycle();
        });
    }
});
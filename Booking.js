document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const service = document.getElementById("service").value;
        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const datetime = document.getElementById("datetime").value;
        const address = document.getElementById("address").value.trim();

        if (!service || !fullName || !phone || !datetime) {
            alert("Please fill all required fields.");
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        document.getElementById("bookingDetails").innerHTML = `
            <strong>Service:</strong> ${service}<br>
            <strong>Name:</strong> ${fullName}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Date & Time:</strong> ${datetime}<br>
            <strong>Address:</strong> ${address || "N/A"}
        `;

        const modal = new bootstrap.Modal(
            document.getElementById("successModal")
        );

        modal.show();

        bookingForm.reset();
    });

});
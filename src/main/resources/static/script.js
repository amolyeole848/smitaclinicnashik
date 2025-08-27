// Fade-in on scroll
const fadeCards = document.querySelectorAll('.fade-card, .card-custom');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('fade-in');
  });
}, { threshold: 0.2 });
fadeCards.forEach(el => observer.observe(el));

// Hero animation on page load
window.addEventListener('load', () => {
  document.querySelector('.hero-content').classList.add('show');
});

// Appointment Form
document.addEventListener('DOMContentLoaded', function () {
  const appointmentForm = document.getElementById('appointmentForm');
  const phoneInput = document.getElementById("phone");

  if (appointmentForm) {
    // Phone input validation
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
      }
    });

    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const phone = phoneInput.value.trim();
      if (!/^\d{10}$/.test(phone)) {
        Swal.fire({
          icon: 'warning',
          title: 'Invalid Phone',
          text: 'Please enter a valid 10-digit phone number.',
          confirmButtonColor: '#ffc107'
        });
        phoneInput.focus();
        return;
      }

      const formData = new FormData(appointmentForm);
      const data = {};
      formData.forEach((value, key) => data[key] = value);

      fetch('http://localhost:8082/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Appointment Confirmed!',
            text: 'Your appointment has been booked successfully.',
            timer: 3000,
            showConfirmButton: false
          });
          appointmentForm.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Booking Failed',
            text: 'Sorry, we could not book your appointment. Please try again.',
            confirmButtonColor: '#dc3545'
          });
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Error: ' + error,
          confirmButtonColor: '#dc3545'
        });
      });
    });
  }
});

// Contact Form
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => data[key] = value);

      fetch('http://localhost:8082/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'We have received your message. Our team will connect with you soon.',
            timer: 3000,
            showConfirmButton: false
          });
          contactForm.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Failed to Send',
            text: 'Sorry, we could not send your message. Please try again.',
            confirmButtonColor: '#dc3545'
          });
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Error: ' + error,
          confirmButtonColor: '#dc3545'
        });
      });
    });
  }
});

// Date & Time Picker
document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#appointmentDate", {
    dateFormat: "Y-m-d",
    minDate: "today"
  });

  flatpickr("#appointmentTime", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
  });
});

console.log("✅ JS Updated with SweetAlert2 (Auto-close Success Alerts)!");

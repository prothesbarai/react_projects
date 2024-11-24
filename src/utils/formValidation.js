import swal from 'sweetalert';

// Form Validation Initialization
export function initializeValidation() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

      form.classList.add('was-validated')
    }, false)
  });
}

// SweetAlert Functionality
export function setupSweetAlert() {
  document.getElementById("submit").addEventListener("click", () => {
    const fullname = document.getElementById("Name").value.trim();
    const yourmail = document.getElementById("Email").value.trim();
    const subject = document.getElementById("Subject").value.trim();
    const phone = document.getElementById("Phone").value.trim();
    const message = document.getElementById("Message").value.trim();

    if (fullname == '' || yourmail == '' || subject == '' || phone == '' || message == '') {
        swal({
            title: "Fields Empty ",
            text: "Please Check the missing field!",
            icon: "warning",
            button: "Ok",
          });
    }
  });
}

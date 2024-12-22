// Form submission and data handling
$(document).ready(function() {
    const form = $('#registrationForm');
    
    // Mark select as pristine on load
    $('#education').attr('data-pristine', 'true');
    
    // Remove pristine state on change
    $('#education').on('change', function() {
        $(this).removeAttr('data-pristine');
    });
    
    form.on('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            firstName: validators.sanitizeInput($('#firstName').val()),
            lastName: validators.sanitizeInput($('#lastName').val()),
            email: validators.sanitizeInput($('#email').val()),
            phone: validators.sanitizeInput($('#phone').val()),
            education: $('#education').val(),
            institution: validators.sanitizeInput($('#institution').val()),
            graduationYear: $('#graduationYear').val(),
            experience: $('#experience').val(),
            skills: validators.sanitizeInput($('#skills').val())
        };

        const validation = validators.validateForm(formData);
        
        if (validation.isValid) {
            $.ajax({
                url: 'process.php',
                type: 'POST',
                data: formData,
                success: function(response) {
                    if (response.success) {
                        displayHandler.showResults(response.data);
                    } else {
                        displayErrorMessages(response.errors);
                    }
                },
                error: function(xhr, status, error) {
                    displayErrorMessages(['Error submitting form. Please try again.']);
                    console.error('Error:', error);
                }
            });
        } else {
            displayErrorMessages(validation.errors);
        }

        function displayErrorMessages(errors) {
            const errorMessages = errors.map(error => `<li>${error}</li>`).join('');
            $('#errorMessages').html(`<ul>${errorMessages}</ul>`).show();
        }
    });

    $('#newRegistration').on('click', function() {
        form[0].reset();
        $('#education').attr('data-pristine', 'true');
        displayHandler.hideResults();
    });
});
// Display handling utilities
const displayHandler = {
    showResults: (data) => {
        $('#registrationForm').hide();
        
        const resultContent = $('#resultContent');
        resultContent.empty();

        const resultHTML = `
            <div class="result-item">
                <p><span class="result-label">Name:</span> ${data.firstName} ${data.lastName}</p>
            </div>
            <div class="result-item">
                <p>Email: ${data.email}</p>
                ${data.phone ? `<p>Phone: ${data.phone}</p>` : ''}
            </div>
            <div class="result-item">
                <p><span class="result-label">Education:</span></p>
                <p>Level: ${data.education}</p>
                <p>Institution: ${data.institution}</p>
                <p>Graduation Year: ${data.graduationYear}</p>
            </div>
            ${data.experience || data.skills ? `
                <div class="result-item">
                    <p><span class="result-label">Professional Details:</span></p>
                    ${data.experience ? `<p>Experience: ${data.experience} years</p>` : ''}
                    ${data.skills ? `<p>Skills: ${data.skills}</p>` : ''}
                </div>
            ` : ''}
        `;

        resultContent.html(resultHTML);
        $('#submissionResult').removeClass('hidden');
    },

    hideResults: () => {
        $('#submissionResult').addClass('hidden');
        $('#registrationForm').show();
    }
};

// Print functionality
$('#printButton').on('click', function() {
    window.print();
});
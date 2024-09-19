window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents page refresh on form submission
        // Get user inputs
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Validate inputs (simple example)
        if (!name || !email || !education) {
            alert('Please fill out all required fields.');
            return;
        }
        // Generate resume output
        resumeOutput.innerHTML = "\n            <h3>".concat(name, "</h3>\n            <p>Email: ").concat(email, "</p>\n            <h4>Education</h4>\n            <p>").concat(education, "</p>\n            <h4>Work Experience</h4>\n            <p>").concat(experience, "</p>\n            <h4>Skills</h4>\n            <p>").concat(skills.split(',').join(', '), "</p>\n        ");
    });
});

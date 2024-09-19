window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents page refresh on form submission

        // Get user inputs
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Validate inputs (simple example)
        if (!name || !email || !education) {
            alert('Please fill out all required fields.');
            return;
        }

        // Generate resume output
        resumeOutput.innerHTML = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Work Experience</h4>
            <p>${experience}</p>
            <h4>Skills</h4>
            <p>${skills.split(',').join(', ')}</p>
        `;
    });
});

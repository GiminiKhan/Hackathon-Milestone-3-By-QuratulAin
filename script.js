var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    
    event.preventDefault();
    // type assertion 
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactnoElement = document.getElementById('contactno');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && contactnoElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contactno = contactnoElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong>".concat(name_1, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>contact No:</strong>").concat(contactno, "</p>\n    <p><strong>Address:</strong>").concat(address, "</p>\n    \n    \n   \n\n<h3>Education</h3>\n<p>Education:").concat(education, "</p>\n\n\n<h3>Education</h3>\n<p>experience:").concat(experience, "</p>\n\n<h3>Education</h3>\n <p>skills:").concat(skills, "</p>\n\n    ");
        var resumeOutputElement = document.getElementById('resumeoutput');
        console.log(resumeOutput)
        if (resumeOutput) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output elements are missing');
        }
    }
    else {
        console.error('one or more elements are missing');
    }
});

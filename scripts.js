// // Define the available lessons and subjects based on class
const lessonsData = {
    "6th": {
        "social": ["Lesson 1", "Lesson 2"],
        "english": ["Lesson 1", "Lesson 2", "Lesson 3"],
        "english_sr": ["Lesson 1", "Lesson 2"],
        "maths": ["Introductory Classes", "Lesson 1", "Lesson 2", "Lesson 3"],
        "science": ["Lesson 1", "Lesson 2"],
        "telugu": ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"]
    },
    "10th": {
        "maths": ["Lesson 1", "Lesson 2"],
        "english": ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
        "science_physics": ["Lesson 1", "Lesson 2"],
        "hindi": ["Lesson 1", "Lesson 2"],
        "social_economics": ["Lesson 1", "Lesson 2"],
        "social_geography": ["Lesson 1", "Lesson 2"]
    }
};

// Initialize the subject and lesson filters with "All Subjects" and "All Lessons"
function initializeSubjectFilter() {
    const subjectFilter = document.getElementById('subjectFilter');
    subjectFilter.innerHTML = '<option value="all">All Subjects</option>';
}

function initializeLessonFilter() {
    const lessonFilter = document.getElementById('lessonFilter');
    lessonFilter.innerHTML = '<option value="all">All Lessons</option>';
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize subject and lesson filters when the page loads
    initializeSubjectFilter();
    initializeLessonFilter();

    // Add event listeners for class and subject filters
    document.getElementById('classFilter').addEventListener('change', updateSubjectsAndLessons);
    document.getElementById('subjectFilter').addEventListener('change', updateLessonsAndFilterNotes);
    document.getElementById('lessonFilter').addEventListener('change', filterNotes);
});

function updateSubjectsAndLessons() {
    const classFilter = document.getElementById('classFilter').value.toLowerCase();
    const subjectFilter = document.getElementById('subjectFilter');

    // Clear existing options in the subject and lesson filters
    initializeSubjectFilter();
    initializeLessonFilter();

    // Populate the subject dropdown based on selected class
    if (classFilter !== 'all') {
        const subjects = Object.keys(lessonsData[classFilter] || {});
        subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject.replace('_', ' ').toUpperCase(); // Replace underscore with space and capitalize
            subjectFilter.appendChild(option);
        });
    }

    // Apply the filtering after updating the subjects and lessons dropdowns
    filterNotes();
}

function updateLessonsAndFilterNotes() {
    const classFilter = document.getElementById('classFilter').value.toLowerCase();
    const subjectFilter = document.getElementById('subjectFilter').value.toLowerCase();
    const lessonFilter = document.getElementById('lessonFilter');

    // Clear existing options in the lesson filter
    initializeLessonFilter();

    // Populate the lesson dropdown based on selected class and subject
    if (classFilter !== 'all' && subjectFilter !== 'all') {
        const lessons = lessonsData[classFilter]?.[subjectFilter];
        if (lessons) {
            lessons.forEach(lesson => {
                const option = document.createElement('option');
                option.value = lesson.toLowerCase();
                option.textContent = lesson;
                lessonFilter.appendChild(option);
            });
        }
    }

    // Apply the filtering after updating the lessons dropdown
    filterNotes();
}

function filterNotes() {
    const classFilter = document.getElementById('classFilter').value.toLowerCase();
    const subjectFilter = document.getElementById('subjectFilter').value.toLowerCase();
    const lessonFilter = document.getElementById('lessonFilter').value.toLowerCase();

    const rows = document.querySelectorAll('#pdfList tbody tr');

    rows.forEach(row => {
        const className = row.getAttribute('data-class').toLowerCase();
        const subjectName = row.getAttribute('data-subject').toLowerCase();
        const lessonName = row.getAttribute('data-lesson').toLowerCase();

        if (
            (classFilter === 'all' || className === classFilter) &&
            (subjectFilter === 'all' || subjectName === subjectFilter) &&
            (lessonFilter === 'all' || lessonName === lessonFilter)
        ) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}



// Toggle navigation
document.addEventListener("DOMContentLoaded", function() {
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('nav');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});

// Initialize EmailJS
(function(){
    emailjs.init("eFFnvBh7YKicvN14v"); // Replace with your actual EmailJS user ID
})();

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submission started...");

    emailjs.sendForm('service_k0zoxi9', 'template_rcmaf84', this)
        .then(function() {
            console.log('Email sent successfully');
            alert('Your message has been sent!');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
});

const form = document.getElementById("surveyForm");
const output = document.getElementById("output");

// Load existing data from localStorage
let surveyData = JSON.parse(localStorage.getItem("surveyData")) || [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const course = document.getElementById("course").value;
  const feedback = document.getElementById("feedback").value;

  const ratingInput = document.querySelector('input[name="rating"]:checked');
  const rating = ratingInput ? ratingInput.value : "";

  // Create JSON object
  const formData = {
    name,
    age,
    gender,
    course,
    rating,
    feedback,
    submittedAt: new Date().toLocaleString()
  };

  // Store in array
  surveyData.push(formData);

  // Save to localStorage (JSON)
  localStorage.setItem("surveyData", JSON.stringify(surveyData));

  // Display JSON
  output.textContent = JSON.stringify(surveyData, null, 2);

  // Reset form
  form.reset();
});

// Display existing data on load
output.textContent = JSON.stringify(surveyData, null, 2);
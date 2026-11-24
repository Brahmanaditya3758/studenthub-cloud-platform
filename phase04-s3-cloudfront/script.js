// 1. Existing Project Details functionality

const detailsButton = document.getElementById("details-button");
const projectDetails = document.getElementById("project-details");

detailsButton.addEventListener("click", function () {
  if (projectDetails.hidden) {
    projectDetails.hidden = false;
    detailsButton.textContent = "Hide Project Details";
  } else {
    projectDetails.hidden = true;
    detailsButton.textContent = "Show Project Details";
  }
});


// 2. StudentHub API integration

const loadStudentsButton = document.getElementById("load-students-button");
const studentsStatus = document.getElementById("students-status");
const studentsList = document.getElementById("students-list");

const API_URL = "https://mwnic5mz36.execute-api.ap-south-1.amazonaws.com/api/students";

loadStudentsButton.addEventListener("click", async function () {
  studentsStatus.textContent = "Loading students...";
  studentsList.innerHTML = "";

  try {
    // Send GET request to API Gateway
    const response = await fetch(API_URL);

    // Check whether the request was successful
    if (!response.ok) {
      throw new Error("Failed to fetch student records");
    }

    // Convert JSON response into JavaScript data
    const data = await response.json();

    // Display success message
    studentsStatus.textContent = data.message;

    // Display student records
    data.students.forEach(function (student) {
      const listItem = document.createElement("li");

      listItem.textContent =
        `ID: ${student.id} | Name: ${student.name} | Course: ${student.course}`;

      studentsList.appendChild(listItem);
    });

  } catch (error) {
    studentsStatus.textContent = "Unable to load students. Please try again.";
    console.error("API Error:", error);
  }
});
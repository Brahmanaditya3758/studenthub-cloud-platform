
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
